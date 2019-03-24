import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicOverviewContainer } from './comic-overview.container';

describe('ComicOverviewComponent', () => {
  let component: ComicOverviewContainer;
  let fixture: ComponentFixture<ComicOverviewContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicOverviewContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicOverviewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
