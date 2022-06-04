import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DrivertRq, DrivertRs, ListDrivertsResponse } from 'src/proto/drivert.pb';
import { WsRpcService } from './ws-rpc.service';

@Injectable({
  providedIn: 'root'
})
export class DrivertServiceWsrpcService {

  constructor(private wsRpcService: WsRpcService) { }
  getAllDriverts(
    baseUrl: string
  ) : Subject<ListDrivertsResponse> {
    const replySubject = new Subject<ListDrivertsResponse>();
    this.wsRpcService.singleRequest(
      baseUrl,
      "/Drivertservice/GetAllDriverts",
      new Uint8Array(0)
    ).subscribe({
      next: value => replySubject.next(ListDrivertsResponse.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });
    return replySubject;
  }

  createDrivert(
    baseUrl: string,
    request: DrivertRq
  ) : Subject<DrivertRs> {
    const replySubject = new Subject<DrivertRs>();
    this.wsRpcService.singleRequest(
      baseUrl,
      "/Drivertservice/CreateUser",
      request.serializeBinary()
    ).subscribe({
      next: value => replySubject.next(DrivertRs.deserializeBinary(value)),
      error: err => replySubject.error(err),
      complete: () => replySubject.complete()
    });
    return replySubject;
  }
}
