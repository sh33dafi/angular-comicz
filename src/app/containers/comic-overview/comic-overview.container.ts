import {Component, OnInit} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'comicz-comic-overview',
  template: `
    <comicz-quick-select
      (selectCollection)='onCollectionSelected($event)'
      (selectWholeCollection)='onWholeCollectionSelected()'
    ></comicz-quick-select>
    <comicz-comic-collection [comicSeries]='filteredComicSeries$ | async'></comicz-comic-collection>
  `,
  styleUrls: ['./comic-overview.container.scss']
})
export class ComicOverviewContainer implements OnInit {
  private initialComicSeries: Array<ComicSeries> = [];

  public filter$: BehaviorSubject<string> = new BehaviorSubject('');
  public filteredComicSeries$: Observable<Array<ComicSeries>>;

  ngOnInit() {
    this.initialComicSeries = [
      {title: 'Urbanus', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries,
      {title: 'Suske en Wiske', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries,
      {title: 'Amoras', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries,
      {title: 'Jommeke', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries,
      {title: 'Nero', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries,
      {title: 'Kuifje', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries
    ];

    const alfabetical = (comicSerie1: ComicSeries, comicSerie2: ComicSeries) => {
      return comicSerie1.title.localeCompare(comicSerie2.title);
    };

    this.filteredComicSeries$ = this.filter$.pipe(
      tap(t => console.log(t)),
      distinctUntilChanged(),
      debounceTime(200),
      switchMap(filter => of(this.filterSeries(filter))),
      map(comicSeries => comicSeries.sort(alfabetical))
    );
  }

  private filterSeries(filter): Array<ComicSeries> {
    return this.initialComicSeries.filter(comicsSerie => comicsSerie.title.toUpperCase().startsWith(filter));
  }

  onCollectionSelected(letter: string) {
    this.filter$.next(letter);
  }

  onWholeCollectionSelected() {
    this.filter$.next('');
  }

}
