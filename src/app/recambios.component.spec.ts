import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecambiosComponent } from './recambios.component';

describe('RecambiosComponent', () => {
  let component: RecambiosComponent;
  let fixture: ComponentFixture<RecambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
