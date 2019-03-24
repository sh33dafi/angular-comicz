import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComicCollectionComponent} from './components/comic-collection/comic-collection.component';
import {ComicPosterComponent} from './components/comic-poster/comic-poster.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';
import {ComicOverviewContainer} from './containers/comic-overview/comic-overview.container';
import {HttpClientModule} from '@angular/common/http';
import {ComicRouterModule} from './comic-router.module';
import {ComicSeriesDetailContainer} from './containers/comic-series-detail/comic-series-detail.container';

@NgModule({
  declarations: [
    ComicCollectionComponent,
    ComicPosterComponent,
    QuickSelectComponent,
    ComicOverviewContainer,
    ComicSeriesDetailContainer
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComicRouterModule
  ]
})
export class ComicModule { }
