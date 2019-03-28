import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ComicService} from '../../service/comic.service';
import {ComicSeriesCreateContainer} from './comic-series-create.container';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ComicSeries} from '../../model/comic-series.model';
import {Subject} from 'rxjs';
import any = jasmine.any;
import SpyObj = jasmine.SpyObj;

describe('ComicSeriesCreateContainer', () => {
  let component: ComicSeriesCreateContainer;
  let fixture: ComponentFixture<ComicSeriesCreateContainer>;
  let router: Router;
  let comicService: SpyObj<ComicService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicSeriesCreateContainer],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ComicService,
          useFactory: () => jasmine.createSpyObj('ComicService', ['createSeries'])
        }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSeriesCreateContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    comicService = TestBed.get(ComicService);
    console.log('===', comicService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the form is cancelled', () => {
    it('should navigate to the overview page', () => {
      spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('comicz-series-create-form')).triggerEventHandler('cancel', null);
      expect(router.navigate).toHaveBeenCalledWith(['..', 'overview'], any(Object));
    });
  });

  describe('When the form is saved', () => {
    it('should navigate to the overview page', () => {
      const comicSeries = {title: 'test'} as ComicSeries;
      const subject = new Subject();
      comicService.createSeries.and.returnValue(subject);
      spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('comicz-series-create-form')).triggerEventHandler('save', comicSeries);
      expect(comicService.createSeries).toHaveBeenCalledWith(comicSeries);

      subject.next();
      expect(router.navigate).toHaveBeenCalledWith(['..', 'overview'], any(Object));
    });
  });
});
