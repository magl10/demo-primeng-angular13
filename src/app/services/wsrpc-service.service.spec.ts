import { TestBed } from '@angular/core/testing';

import { WsRpcService } from './ws-rpc.service';

describe('WsrpcServiceService', () => {
  let service: WsRpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsRpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
