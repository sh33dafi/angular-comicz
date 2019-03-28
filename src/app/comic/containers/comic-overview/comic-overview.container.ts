import {Component, OnInit} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ComicService} from '../../service/comic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {LoadComicsAction, LoadComicsSuccessAction} from '../../reducers/actions';
import {State} from '../../reducers';
import {RootState} from '../../../reducers';

@Component({
  selector: 'comicz-comic-overview',
  template: `
    <h1 *ngIf='isLoading$ | async'>Loading</h1>
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
  private isLoading$: Observable<boolean>;

  constructor(private comicService: ComicService, private router: Router, private route: ActivatedRoute, private store: Store<RootState>) {
    this.isLoading$ = this.store.select(state => state.comics.isLoading);
    this.filteredComicSeries$ = this.store.select(state => state.comics.comicSeries);
  }

  ngOnInit() {
    this.loadComics('');
  }

  private loadComics(filter: string = '') {
    this.store.dispatch(new LoadComicsAction());
    this.comicService.getAllComicSeries(filter)
      .subscribe(comics => this.store.dispatch(new LoadComicsSuccessAction(comics)));
  }

  onCollectionSelected(letter: string) {
    this.loadComics(letter);
  }

  onWholeCollectionSelected() {
    this.loadComics();
  }

  onPosterSelected(id: number) {
    this.router.navigate(['..', id], {relativeTo: this.route});
  }

  addNewSeries() {
    this.router.navigate(['..', 'add'], {relativeTo: this.route});
  }

}
