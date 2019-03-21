import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComicCollectionComponent } from './components/comic-collection/comic-collection.component';
import {HeaderComponent} from './components/header/header.component';
import {ComicPosterComponent} from './components/comic-poster/comic-poster.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicCollectionComponent,
    ComicPosterComponent,
    HeaderComponent,
    QuickSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
