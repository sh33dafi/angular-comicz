import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppContainer } from './app.container';
import { ComicCollectionComponent } from './components/comic-collection/comic-collection.component';
import {HeaderComponent} from './components/header/header.component';
import {ComicPosterComponent} from './components/comic-poster/comic-poster.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';
import { ComicOverviewContainer } from './containers/comic-overview/comic-overview.container';

@NgModule({
  declarations: [
    AppContainer,
    ComicCollectionComponent,
    ComicPosterComponent,
    HeaderComponent,
    QuickSelectComponent,
    ComicOverviewContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
