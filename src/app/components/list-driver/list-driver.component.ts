import { Component, OnInit } from '@angular/core';
import {DrivertServiceWsrpcService} from '../../services/drivert-service-wsrpc.service';
import { DrivertRs, DrivertRq} from "../../../proto/drivert.pb";

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss']
})
export class ListDriverComponent implements OnInit {
  
  host = "ws://localhost:8080";
  
  tableObjects : DrivertRs[]=[];

  tableHeaders = [
    "ID", "Nombre", "APELLIDO", "DNI", "PLACA", "MARCA", "ESTATUS"
  ]
  
  constructor(
    private drivers: DrivertServiceWsrpcService
  ) { }

  ngOnInit(): void {
    //this.listar();
    this.getListDriver();
  }
  getListDriver() {

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
}

/*
    private String id;
    private String name;
    private String lastname;
    private String dni;
    private String placa;
    private String marca;
    private Boolean status; */
