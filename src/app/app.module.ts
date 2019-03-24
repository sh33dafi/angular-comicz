import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppContainer} from './app.container';
import {ComicModule} from './comic/comic.module';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutergModule} from './app-router.module';

@NgModule({
  declarations: [
    AppContainer,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ComicModule,
    AppRoutergModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
