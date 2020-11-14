import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanizadoComponent } from './mecanizado.component';

describe('MecanizadoComponent', () => {
  let component: MecanizadoComponent;
  let fixture: ComponentFixture<MecanizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
