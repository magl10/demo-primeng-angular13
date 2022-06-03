import {Subject} from "rxjs";
import {WsRPCClientStats} from "./WsRPCClientStats";

export class WsRPCClient {

  static WSRPC_VERSION = "1.0";

  stats : Subject<WsRPCClientStats> = new Subject<WsRPCClientStats>();
  statsObj = new WsRPCClientStats();

  // Unary , Server Side Streaming
  public singleRequest(
    baseUrl: string,
    method: string,
    payload: Uint8Array
  ) : Subject<ArrayBuffer> {
    this.statsObj.reset();
    this.statsObj.method = method;
    this.stats.next(this.statsObj);

    const start = performance.now();
    let first = true;
    let lastObj = start;
    let objRcvAvg = 0;

    let ws = new WebSocket(baseUrl + method);
    ws.binaryType = 'arraybuffer';
    let subj = new Subject<ArrayBuffer>();
    ws.onopen = ev => {
      this.statsObj.connectionOpenTime = performance.now() - start;
      this.stats.next(this.statsObj);
      ws.send(payload);
    }
    ws.onmessage = ev => {
      const now = performance.now();
      if (first) {
        this.statsObj.firstObjTime = now - start;
        this.stats.next(this.statsObj);
        first = false;
        objRcvAvg = this.statsObj.firstObjTime;
      } else {
        objRcvAvg = (objRcvAvg + (now - lastObj)) / 2;
      }
      this.statsObj.objRecvAvg = objRcvAvg;
      lastObj = now;
      if (ev.data instanceof ArrayBuffer) {
        subj.next(ev.data);
      } else {
        console.error("wsRPC: Received Data is not Binary")
      }
      this.statsObj.recvObjectCount++;
      this.stats.next(this.statsObj);
    };
    ws.onerror = ev => {
      subj.error(ev);
      this.stats.error(ev);
    }
    ws.onclose = ev => {
      this.statsObj.totalTime = performance.now() - start;
      this.statsObj.completed = true;
      this.stats.next(this.statsObj);
      this.statsObj.reset();

      subj.complete();

      console.log("WS CLOSED")
    }
    return subj;
  }

  // Client Side Streaming
  public streamingRequest(
    baseUrl: string,
    method: string,
    stream: Subject<Uint8Array>
  ) : Subject<ArrayBuffer> {
    this.statsObj.reset();
    this.stats.next(this.statsObj);

    const start = performance.now();

    let ws = new WebSocket(baseUrl + method);
    ws.binaryType = 'arraybuffer';
    let subj = new Subject<ArrayBuffer>();
    ws.onopen = ev => {
      stream.subscribe({
        next: value => {
          ws.send(value);
        }
      })
    }
    ws.onmessage = ev => {
      if (ev.data instanceof ArrayBuffer) {
        subj.next(ev.data);
      } else {
        console.error("wsRPC: Received Data is not Binary")
      }
    };
    ws.onerror = ev => {
      subj.error(ev);
    }
    ws.onclose = ev => {
      subj.complete();
    }
    return subj;
  }
}
