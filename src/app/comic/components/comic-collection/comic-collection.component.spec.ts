import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCollectionComponent } from './comic-collection.component';

describe('ComicCollectionComponent', () => {
  let component: ComicCollectionComponent;
  let fixture: ComponentFixture<ComicCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
