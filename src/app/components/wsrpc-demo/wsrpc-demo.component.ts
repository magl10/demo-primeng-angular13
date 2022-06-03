import { Component, OnInit } from '@angular/core';
import {UserServiceWsrpcService} from "../../services/user-service-wsrpc.service";
import {UserRs} from "../../../proto/user.pb";

@Component({
  selector: 'app-wsrpc-demo',
  templateUrl: './wsrpc-demo.component.html',
  styleUrls: ['./wsrpc-demo.component.scss']
})
export class WsrpcDemoComponent implements OnInit {

  constructor(
    private userService: UserServiceWsrpcService
  ) { }

  tableObjects : UserRs[] = []
  tableHeaders = [
    "Nombre", "Edad", "Sexo"
  ]

  ngOnInit(): void {
  }

  obtenerListaDeUsuario() {
    this.userService.getAllUsers("ws://localhost:8080").subscribe(
      {
        next: value => {
            const usuarios = value.users as UserRs[];
            this.tableObjects = usuarios;
        },
        complete: () => {
          console.log("Se completo el request.")
        }
      }
    );
  }

}
