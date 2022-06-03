import { Injectable } from '@angular/core';
import {WsRPCClient} from "../wsrpc/WsRPCClient";

@Injectable({
  providedIn: 'root'
})
export class WsrpcServiceService extends WsRPCClient {

  constructor() {
    super();
  }
}
