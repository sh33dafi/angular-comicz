import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'series/overview'},
  {path: 'series', loadChildren: './comic/comic.module#ComicModule'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, enableTracing: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutergModule {
}
