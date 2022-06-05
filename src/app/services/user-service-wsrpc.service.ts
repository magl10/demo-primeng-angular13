import { Injectable } from '@angular/core';
import {WsRpcService} from "./ws-rpc.service";
import {GetPositionDriverRq, ListUsersResponse, PositionRs, UserRq, UserRs} from "../../proto/user.pb";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceWsrpcService {

  constructor(
    private wsRpcService: WsRpcService
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

  createUser(
    baseUrl: string,
    request: UserRq
  ) : Subject<UserRs> {
    const replySubject = new Subject<UserRs>();
    this.wsRpcService.singleRequest(
      baseUrl,
      "/UserService/CreateUser",
      request.serializeBinary()
    ).subscribe({
      next: value => replySubject.next(UserRs.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });
    return replySubject;
  }
  updateUser(
    baseUrl: string,
    request: UserRq
  ) : Subject<UserRs> {
    const replySubject = new Subject<UserRs>();
    this.wsRpcService.singleRequest(
      baseUrl,
      "/UserService/UpdateUser",
      request.serializeBinary()
    ).subscribe({
      next: value => replySubject.next(UserRs.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });
    return replySubject;
  }
  onReceivedLocationDriver(
    baseUrl: string,
    request: GetPositionDriverRq
  ) : Subject<PositionRs> {
    const replySubject = new Subject<PositionRs>();

    this.wsRpcService.singleRequest(
      baseUrl,
      "/UserService/OnReceivedLocationDriver",
      request.serializeBinary()
    ).subscribe({
      next: value => replySubject.next(PositionRs.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });

    return replySubject;
  }

}
