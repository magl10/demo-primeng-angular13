
export class WsRPCClientStats {
    method: string = "";
    connectionOpenTime: number = 0;
    recvObjectCount: number = 0;
    sentObjectCount: number = 0;
    firstObjTime: number = 0;
    objRecvAvg: number = 0;
    binToObjAvg: number = 0;
    totalTime: number = 0;
    completed: boolean = false;

    reset() {
      this.method = "";
      this.connectionOpenTime = 0;
      this.objRecvAvg = 0;
      this.recvObjectCount = 0;
      this.firstObjTime = 0;
      this.binToObjAvg = 0;
      this.totalTime = 0;
      this.sentObjectCount = 0;
      this.completed = false;
    }
}
