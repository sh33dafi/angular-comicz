import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComicCollectionComponent} from './components/comic-collection/comic-collection.component';
import {ComicPosterComponent} from './components/comic-poster/comic-poster.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';
import {ComicOverviewContainer} from './containers/comic-overview/comic-overview.container';
import {HttpClientModule} from '@angular/common/http';
import {ComicRouterModule} from './comic-router.module';
import {ComicSeriesDetailContainer} from './containers/comic-series-detail/comic-series-detail.container';
import {FabButtonComponent} from './components/fab-button/fab-button.component';
import {ComicSeriesCreateContainer} from './containers/comic-series-create/comic-series-create.container';

@NgModule({
  declarations: [
    ComicCollectionComponent,
    ComicPosterComponent,
    QuickSelectComponent,
    ComicOverviewContainer,
    ComicSeriesDetailContainer,
    FabButtonComponent,
    ComicSeriesCreateContainer
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComicRouterModule
  ]
})
export class ComicModule {
}
