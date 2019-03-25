import {NgModule} from '@angular/core';
import {ComicOverviewContainer} from './containers/comic-overview/comic-overview.container';
import {RouterModule, Routes} from '@angular/router';
import {ComicSeriesDetailContainer} from './containers/comic-series-detail/comic-series-detail.container';
import {ComicSeriesCreateContainer} from './containers/comic-series-create/comic-series-create.container';

export const routes: Routes = [
  {path: 'overview', component: ComicOverviewContainer},
  {path: 'add', component: ComicSeriesCreateContainer},
  {path: ':id', component: ComicSeriesDetailContainer}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComicRouterModule {
}
