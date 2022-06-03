import { TestBed } from '@angular/core/testing';

import { UserServiceWsrpcService } from './user-service-wsrpc.service';

describe('UserServiceWsrpcService', () => {
  let service: UserServiceWsrpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceWsrpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
