import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectificadosComponent } from './rectificados.component';

describe('RectificadosComponent', () => {
  let component: RectificadosComponent;
  let fixture: ComponentFixture<RectificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
