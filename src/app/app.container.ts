import {Component} from '@angular/core';

@Component({
  selector: 'comicz-root',
  template: `
    <comicz-header></comicz-header>
    <comicz-comic-overview></comicz-comic-overview>
  `,
  styleUrls: ['./app.container.scss']
})
export class AppContainer {

}
