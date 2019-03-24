import {NgModule} from '@angular/core';
import {ComicOverviewContainer} from './containers/comic-overview/comic-overview.container';
import {RouterModule, Routes} from '@angular/router';
import {ComicSeriesDetailContainer} from './containers/comic-series-detail/comic-series-detail.container';

export const routes: Routes = [
  {path: 'overview', component: ComicOverviewContainer},
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
