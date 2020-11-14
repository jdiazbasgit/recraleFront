import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelicoilsComponent } from './helicoils.component';

describe('HelicoilsComponent', () => {
  let component: HelicoilsComponent;
  let fixture: ComponentFixture<HelicoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelicoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelicoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
