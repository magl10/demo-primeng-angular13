import { TestBed } from '@angular/core/testing';

import { DrivertServiceWsrpcService } from './drivert-service-wsrpc.service';

describe('DrivertServiceWsrpcService', () => {
  let service: DrivertServiceWsrpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrivertServiceWsrpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
