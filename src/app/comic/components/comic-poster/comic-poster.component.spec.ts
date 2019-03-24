import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPosterComponent } from './comic-poster.component';

describe('ComicPosterComponent', () => {
  let component: ComicPosterComponent;
  let fixture: ComponentFixture<ComicPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
