import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketRpcStatsComponent } from './websocket-rpc-stats.component';

describe('WebsocketRpcStatsComponent', () => {
  let component: WebsocketRpcStatsComponent;
  let fixture: ComponentFixture<WebsocketRpcStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsocketRpcStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketRpcStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
