import { Component, OnInit } from '@angular/core';
import {DrivertServiceWsrpcService} from '../../services/drivert-service-wsrpc.service';
import { DrivertRs, DrivertRq, DrivertUpdateRq} from "../../../proto/drivert.pb";

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss']
})
export class ListDriverComponent implements OnInit {
  
  host = "ws://localhost:8080";
  
  tableObjects : DrivertRs[]=[];
  loading = false;
  tableHeaders = [
    "ID", "Nombre", "APELLIDO", "DNI", "PLACA", "MARCA", "SOLICITUD","Acciones"
  ];
  
  constructor(
    private drivers: DrivertServiceWsrpcService
  ) {
  
   }

  ngOnInit(): void {
    this.loadDataDriverts();
  }
  loadDataDriverts(){
    this.drivers.getAllDriverts(this.host).subscribe(
      {
        next: value => {
            const driveRs = value.driverts as DrivertRs[];
            this.tableObjects = driveRs;
        },
        complete: () => {
          console.log("Se completo el request.")
        }
      }
    );
  }
  editarActivarEstado(drivert:any){
    
    this.updateDrivert(drivert,true);
    
  }
  editarDesactivarEstado(drivert:any){
   
    this.updateDrivert(drivert,false);
    
  }
  updateDrivert(drivert:any,estado:boolean) {
    const request = new DrivertUpdateRq(
      {
        id: drivert.id,
        name: drivert.name,
        lastname: drivert.lastname,
        dni: drivert.dni,
        placa: drivert.placa,
        marca: drivert.marca,
        status: estado,

        
      }
    );
    this.drivers.updateDrivert(
      this.host,
      request
    ).subscribe(
      {
        next: value => {
          console.log("Se modifico el estado", value);
        },
        complete: () => {
          console.log("Se completo el request.");
          this.loadDataDriverts();
          
        },
        error:(e)=>{
          console.log("mi erro es : "+ e.message)
        }
      }
    )
  }


  
}

/*
    private String id;
    private String name;
    private String lastname;
    private String dni;
    private String placa;
    private String marca;
    private Boolean status; */
