import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DrivertServiceWsrpcService } from 'src/app/services/drivert-service-wsrpc.service';
import { WsRpcService } from 'src/app/services/ws-rpc.service';
import { DrivertRq, DrivertUpdateRq } from 'src/proto/drivert.pb';

@Component({
  selector: 'app-diver-form',
  templateUrl: './diver-form.component.html',
  styleUrls: ['./diver-form.component.scss']
})


export class DiverFormComponent implements OnInit {
  host = "ws://localhost:8080";
  constructor(private router: Router,
    private drivertService: DrivertServiceWsrpcService,
    private wsRpcService: WsRpcService,
    private messageService: MessageService) { }
  


  ngOnInit(): void {

  }

  registrar():any{
    
    // this.router.navigate(['/driver']);
    this.createDrivert();

  }
  id ="drivert/9008947809";
  name = "";
  lastname = "";
  dni = "";
  placa = "";
  marca = "";
  status: "";
  createDrivert() {
    const request = new DrivertRq(
      {
        name: this.name,
        lastname: this.lastname,
        dni: this.dni,
        placa: this.placa,
        marca: this.marca,
        status: false,

        
      }
    );
    this.drivertService.createDrivert(
      this.host,
      request
    ).subscribe(
      {
        next: value => {
          console.log("Se creó usuario", value);
        },
        complete: () => {
          console.log("Se completo el request.");
          
        },
        error:(e)=>{
          console.log("mi erro es : "+ e.message)
        }
      }
    )
  }

  updateDrivert() {
    const request = new DrivertUpdateRq(
      {
        id: this.id,
        name: this.name,
        lastname: this.lastname,
        dni: this.dni,
        placa: this.placa,
        marca: this.marca,
        status: false,

        
      }
    );
    this.drivertService.updateDrivert(
      this.host,
      request
    ).subscribe(
      {
        next: value => {
          console.log("Se creó usuario", value);
        },
        complete: () => {
          console.log("Se completo el request.");
          
        },
        error:(e)=>{
          console.log("mi erro es : "+ e.message)
        }
      }
    )
  }

  
}
