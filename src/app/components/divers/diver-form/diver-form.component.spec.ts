import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiverFormComponent } from './diver-form.component';

describe('DiverFormComponent', () => {
  let component: DiverFormComponent;
  let fixture: ComponentFixture<DiverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiverFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
