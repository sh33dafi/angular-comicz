import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicCollectionComponent} from './components/comic-collection/comic-collection.component';
import {ComicPosterComponent} from './components/comic-poster/comic-poster.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';
import {ComicOverviewContainer} from './containers/comic-overview/comic-overview.container';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ComicCollectionComponent,
    ComicPosterComponent,
    QuickSelectComponent,
    ComicOverviewContainer
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ComicOverviewContainer
  ]
})
export class ComicModule { }
