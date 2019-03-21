import {Component} from '@angular/core';

@Component({
  selector: 'comicz-root',
  template: `
    <!--comicz-header-->
    <!--comicz-quick-select -->
    <comicz-comic-collection></comicz-comic-collection>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
