import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppContainer} from './app.container';
import {ComicModule} from './comic/comic.module';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    AppContainer,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ComicModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
