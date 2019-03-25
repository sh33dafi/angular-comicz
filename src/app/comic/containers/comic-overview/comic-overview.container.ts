import {Component, OnInit} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ComicService} from '../../service/comic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'comicz-comic-overview',
  template: `
    <comicz-quick-select
      (selectCollection)='onCollectionSelected($event)'
      (selectWholeCollection)='onWholeCollectionSelected()'
    ></comicz-quick-select>
    <comicz-comic-collection [comicSeries]='filteredComicSeries$ | async'
                             (posterSelected)='onPosterSelected($event)'></comicz-comic-collection>
    <comicz-fab-button (click)='addNewSeries()'></comicz-fab-button>
  `,
  styleUrls: ['./comic-overview.container.scss']
})
export class ComicOverviewContainer implements OnInit {
  public filter$: BehaviorSubject<string> = new BehaviorSubject('');
  public filteredComicSeries$: Observable<Array<ComicSeries>>;

  constructor(private comicService: ComicService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    const alfabetical = (comicSerie1: ComicSeries, comicSerie2: ComicSeries) => {
      return comicSerie1.title.localeCompare(comicSerie2.title);
    };

    this.filteredComicSeries$ = this.filter$.pipe(
      tap(t => console.log(t)),
      distinctUntilChanged(),
      debounceTime(200),
      switchMap(filter => this.filterSeries(filter)),
      map(comicSeries => comicSeries.sort(alfabetical))
    );
  }

  private filterSeries(filter): Observable<Array<ComicSeries>> {
    return this.comicService.getAllComicSeries(filter);
  }

  onCollectionSelected(letter: string) {
    this.filter$.next(letter);
  }

  onWholeCollectionSelected() {
    this.filter$.next('');
  }

  onPosterSelected(id: number) {
    this.router.navigate(['..', id], {relativeTo: this.route});
  }

  addNewSeries() {
    this.router.navigate(['..', 'add'], {relativeTo: this.route});
  }

}
