import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeriesCreateFormComponent} from './series-create-form.component';

describe('SeriesCreateFormComponent', () => {
  let component: SeriesCreateFormComponent;
  let fixture: ComponentFixture<SeriesCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
