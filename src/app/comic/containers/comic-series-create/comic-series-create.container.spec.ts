import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComicSeriesCreateContainer} from './comic-series-create.container';

describe('ComicSeriesCreateComponent', () => {
  let component: ComicSeriesCreateContainer;
  let fixture: ComponentFixture<ComicSeriesCreateContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicSeriesCreateContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSeriesCreateContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
