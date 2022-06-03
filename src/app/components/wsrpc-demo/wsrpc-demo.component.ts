import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceWsrpcService} from "../../services/user-service-wsrpc.service";
import {GetPositionDriverRq, UserRq, UserRs} from "../../../proto/user.pb";
import {WebsocketRpcStatsComponent} from "../websocket-rpc-stats/websocket-rpc-stats.component";
import {WsRpcService} from "../../services/ws-rpc.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-wsrpc-demo',
  templateUrl: './wsrpc-demo.component.html',
  styleUrls: ['./wsrpc-demo.component.scss']
})
export class WsrpcDemoComponent implements OnInit {

  host = "ws://localhost:8080";

  @ViewChild('statsComponent')
  statsComponent : WebsocketRpcStatsComponent;

  constructor(
    private userService: UserServiceWsrpcService,
    private wsRpcService: WsRpcService,
    private messageService: MessageService
  ) { }

  tableObjects : UserRs[] = []
  tableHeaders = [
    "ID", "Nombre", "Edad", "Sexo"
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.statsComponent.statsAdapter(this.wsRpcService.stats);
  }

  obtenerListaDeUsuario() {

    this.userService.getAllUsers(this.host).subscribe(
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

  nombre = "";
  nickname = "";
  direccion = "";
  edad = "";
  sexo = "";

  crearUsuario() {
    const request = new UserRq(
      {
        name: this.nombre,
        nickName: this.nickname,
        address: this.direccion,
        age: parseInt(this.edad),
        active: true,
        sex: this.sexo
      }
    );
    this.userService.createUser(
      this.host,
      request
    ).subscribe(
      {
        next: value => {
          console.log("Se creó usuario", value);
        },
        complete: () => {
          console.log("Se completo el request.");
          this.obtenerListaDeUsuario();
        }
      }
    )
  }

  recibirUbicaciones() {
    const request = new GetPositionDriverRq({
      idDriver: "95321"
    });
    this.userService.onReceivedLocationDriver(
      this.host,
      request
    ).subscribe({
      next: value => {
        console.log("Se recibió ubicación", value.latitude, value.longitude);
        this.messageService.add(
          {
            severity:'success',
            summary:'Se recibió ubicación desde el servidor',
            detail:'Latitud: ' + value.latitude + ', Longitud: ' + value.longitude
          });
      },
      complete: () => {
        console.log("El servidor cerró la conexión.");
      }
    })
  }

}
