import { Injectable } from '@angular/core';
import {WsRPCClient} from "../wsrpc/WsRPCClient";

@Injectable({
  providedIn: 'root'
})
export class WsRpcService extends WsRPCClient {

  constructor() {
    super();
  }
}
