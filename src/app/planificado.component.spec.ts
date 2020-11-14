import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificadoComponent } from './planificado.component';

describe('PlanificadoComponent', () => {
  let component: PlanificadoComponent;
  let fixture: ComponentFixture<PlanificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
