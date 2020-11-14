import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TornoComponent } from './torno.component';

describe('TornoComponent', () => {
  let component: TornoComponent;
  let fixture: ComponentFixture<TornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
