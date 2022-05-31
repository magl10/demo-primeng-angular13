import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploProgressbarComponent } from './ejemplo-progressbar.component';

describe('EjemploProgressbarComponent', () => {
  let component: EjemploProgressbarComponent;
  let fixture: ComponentFixture<EjemploProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
