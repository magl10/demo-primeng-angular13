import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {WsRPCClientStats} from "../../wsrpc/WsRPCClientStats";

@Component({
  selector: 'app-websocket-rpc-stats',
  templateUrl: './websocket-rpc-stats.component.html',
  styleUrls: ['./websocket-rpc-stats.component.scss']
})
export class WebsocketRpcStatsComponent implements OnInit {

  constructor() { }

  lastCall : string = "N/A"
  objRecvAvg : string = "N/A";
  firstObj : string = "N/A";
  binToObjAvg : string = "N/A";
  pBarProgress : number = 0;
  operationTime : string = "N/A";
  rcvObjectCount : number = 0;
  sentObjectCount : number = 0;

  pBarMode = "static"

  @ViewChild('statsTitle', {static: false})
  titleContainer : ElementRef;


  ngOnInit(): void {
  }

  setIndeterminate() {
    this.pBarMode = 'indeterminate';
  }

  setStatic() {
    this.pBarMode = 'static';
  }

  setWorking() {
    this.titleContainer.nativeElement.style.backgroundColor = 'orange';
    this.titleContainer.nativeElement.style.color = 'black';
  }

  setCompleted() {
    this.titleContainer.nativeElement.style.backgroundColor = 'green';
    this.titleContainer.nativeElement.style.color = 'black';
  }

  setError() {
    this.titleContainer.nativeElement.style.backgroundColor = 'red';
    this.titleContainer.nativeElement.style.color = 'white';
  }

  reset() {
    this.titleContainer.nativeElement.style.backgroundColor = 'black';
    this.titleContainer.nativeElement.style.color = 'white';
    this.lastCall = 'N/A';
    this.objRecvAvg = 'N/A';
    this.operationTime = 'N/A';
    this.firstObj = 'N/A';
    this.rcvObjectCount = 0;
    this.pBarProgress = 0;
    this.setStatic();
  }

  statsAdapter(
    wsRPCClientStats : Subject<WsRPCClientStats>
  ) {
    let first = true;
    wsRPCClientStats?.subscribe(
      {
        next: (value) => {
          if (first) {
            this.setIndeterminate();
            this.setWorking();
            first = false;
          }
          this.lastCall = value.method;
          this.rcvObjectCount = value.recvObjectCount;
          this.firstObj = value.firstObjTime.toFixed(2) + " ms.";
          this.objRecvAvg = value.objRecvAvg.toFixed(2) + " ms.";
          this.binToObjAvg =  value.binToObjAvg.toFixed(2) + " ms.";
          if (value.totalTime == 0) {
            this.operationTime = "Executing...";
          } else {
            this.operationTime = value.totalTime.toFixed(2) + " ms.";
          }
          if (value.completed) {
            this.setCompleted();
            this.setStatic();
            first = true;
          }
        },
        error: (err) => {
          this.setError();
          this.setStatic();
        }
      }
    )
  }

}
