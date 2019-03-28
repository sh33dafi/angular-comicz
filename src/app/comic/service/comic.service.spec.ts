import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ComicService} from './comic.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('Comic Service', () => {
  let service: ComicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    service = TestBed.get(ComicService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('When getAllComicSeries is called', () => {
    describe('Given no filter is passed', () => {
      it('should do a correct http call', (done) => {
        const expectedComics = [{id: 0, title: 'Urbanus', image: 'http://localhost:3000/static/urbanus.jpg'}];
        service.getAllComicSeries().subscribe(comics => {
          expect(comics).toEqual(expectedComics);
          done();
        });

        const req = httpMock.expectOne('http://localhost:3000/api/series');
        req.flush(expectedComics);
      });
    });

    describe('Given a filter is passed', () => {
      it('should do a correct http call', (done) => {
        const expectedComics = [{id: 0, title: 'Urbanus', image: 'http://localhost:3000/static/urbanus.jpg'}];
        service.getAllComicSeries('A').subscribe(comics => {
          expect(comics).toEqual(expectedComics);
          done();
        });

        const req = httpMock.expectOne('http://localhost:3000/api/series?filter=A');
        req.flush(expectedComics);
      });
    });
  });

  describe('When getSeriesDetail is called', () => {
      it('should get the detail of the series with id', (done) => {
        const expectedComic = {id: 1, title: 'Urbanus', image: 'http://localhost:3000/static/urbanus.jpg'};
        service.getSeriesDetail(1).subscribe(comic => {
          expect(comic).toEqual(expectedComic);
          done();
        });

        const req = httpMock.expectOne('http://localhost:3000/api/series/1');
        req.flush(expectedComic);
    });
  });

  describe('When createSeries is called', () => {
    it('do a POST call to create a serie', (done) => {
      const comic = {title: 'Urbanus', image: 'http://localhost:3000/static/urbanus.jpg'};
      service.createSeries(comic).subscribe(() => {
        done();
      });

      const req = httpMock.expectOne('http://localhost:3000/api/series');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(comic);
      req.flush({});
    });
  });
});
