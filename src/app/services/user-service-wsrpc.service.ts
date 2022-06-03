import { Injectable } from '@angular/core';
import {WsrpcServiceService} from "./wsrpc-service.service";
import {ListUsersResponse} from "../../proto/user.pb";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceWsrpcService {

  constructor(
    private wsRpcService: WsrpcServiceService
  ) { }

  getAllUsers(
    baseUrl: string
  ) : Subject<ListUsersResponse> {
    const replySubject = new Subject<ListUsersResponse>();
    this.wsRpcService.singleRequest(
      baseUrl,
      "/UserService/GetAllUsers",
      new Uint8Array(0)
    ).subscribe({
      next: value => replySubject.next(ListUsersResponse.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });
    return replySubject;
  }

}
