import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrpcDemoComponent } from './wsrpc-demo.component';

describe('WsrpcDemoComponent', () => {
  let component: WsrpcDemoComponent;
  let fixture: ComponentFixture<WsrpcDemoComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsrpcDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrpcDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
