import {Component} from '@angular/core';

@Component({
  selector: 'comicz-root',
  template: `
    <comicz-header></comicz-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.container.scss']
})
export class AppContainer {

}
