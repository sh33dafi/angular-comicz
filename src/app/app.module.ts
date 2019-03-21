import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComicCollectionComponent } from './components/comic-collection/comic-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicCollectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
