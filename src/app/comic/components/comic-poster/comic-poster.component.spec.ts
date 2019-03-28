import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComicPosterComponent} from './comic-poster.component';
import {By} from '@angular/platform-browser';

describe('ComicPosterComponent', () => {
  let component: ComicPosterComponent;
  let fixture: ComponentFixture<ComicPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicPosterComponent]
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

  describe('When the poster is clicked', () => {
    it('should emit a poster selected event', () => {
      component.id = 3;
      fixture.detectChanges();
      spyOn(component.posterSelected, 'emit');
      fixture.debugElement.query(By.css('.comic-poster')).triggerEventHandler('click', null);
      expect(component.posterSelected.emit).toHaveBeenCalledWith(3);
    });
  });

  it('should render all props', () => {
    component.id = 3;
    component.image = 'http://test';
    component.title = 'Test';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toEqual('Test');
    expect(fixture.debugElement.query(By.css('img')).properties.src).toEqual('http://test');
  });
});
