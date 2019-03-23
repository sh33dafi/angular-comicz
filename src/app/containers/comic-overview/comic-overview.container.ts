import { Component, OnInit } from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';

@Component({
  selector: 'comicz-comic-overview',
  template: `
    <comicz-quick-select
      (selectCollection)='onCollectionSelected($event)'
      (selectWholeCollection)='onWholeCollectionSelected()'
    ></comicz-quick-select>
    <comicz-comic-collection [comicSeries]='comicSeries'></comicz-comic-collection>
  `,
  styleUrls: ['./comic-overview.container.scss']
})
export class ComicOverviewContainer implements OnInit {
  comicSeries: Array<ComicSeries> = [];

  ngOnInit() {
    this.comicSeries.push({title: 'Urbanus', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Suske en Wiske', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Amoras', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Jommeke', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Nero', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Kuifje', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
  }

  onCollectionSelected(letter: string) {
    console.log(`The collection ${letter} is selected`);
  }

  onWholeCollectionSelected() {
    console.log('The whole collection is selected');
  }

}
