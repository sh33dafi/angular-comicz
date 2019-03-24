import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSeriesDetailContainer } from './comic-series-detail.container';

describe('ComicSeriesDetailContainer', () => {
  let component: ComicSeriesDetailContainer;
  let fixture: ComponentFixture<ComicSeriesDetailContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicSeriesDetailContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSeriesDetailContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
