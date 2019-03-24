import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppContainer} from './app.container';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutergModule} from './app-router.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppContainer,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutergModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
