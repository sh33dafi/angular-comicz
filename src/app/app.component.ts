import {Component} from '@angular/core';

@Component({
  selector: 'comicz-root',
  template: `
    <comicz-header></comicz-header>
    <comicz-quick-select
      (selectCollection)='onCollectionSelected($event)'
      (selectWholeCollection)='onWholeCollectionSelected()'
    ></comicz-quick-select>
    <comicz-comic-collection></comicz-comic-collection>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onCollectionSelected(letter: string) {
    console.log(`The collection ${letter} is selected`);
  }

  onWholeCollectionSelected() {
    console.log('The whole collection is selected');
  }
}
