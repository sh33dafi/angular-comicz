import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ComicService} from '../../service/comic.service';
import {ComicSeries} from '../../model/comic-series.model';

@Component({
  selector: 'comicz-comic-series-detail',
  template: `
    <div *ngIf='seriesDetail'>
      <h1>{{seriesDetail.title}} - {{seriesDetail.author}}</h1>
      <comicz-comic-collection [comicSeries]='seriesDetail.comics'></comicz-comic-collection>
    </div>
  `,
  styleUrls: ['./comic-series-detail.container.scss']
})
export class ComicSeriesDetailContainer implements OnInit, OnDestroy {

  seriesDetail: ComicSeries;
  destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private comicService: ComicService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(param => param.id as number),
      switchMap(id => this.comicService.getSeriesDetail(id)),
      takeUntil(this.destroy$)
    ).subscribe(seriesDetail => this.seriesDetail = seriesDetail);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
