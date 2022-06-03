import { TestBed } from '@angular/core/testing';

import { WsrpcServiceService } from './wsrpc-service.service';

describe('WsrpcServiceService', () => {
  let service: WsrpcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsrpcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
