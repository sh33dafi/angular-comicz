import {Component, OnInit} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';

@Component({
  selector: 'comicz-comic-collection',
  template: `
    <ul class='comic-collection'>
      <li class='comic-collection__item'
          *ngFor='let comicSerie of comicSeries'>
        <comicz-comic-poster
          [title]='comicSerie.title'
          [image]='comicSerie.image'></comicz-comic-poster>
      </li>
    </ul>
  `,
  styleUrls: ['./comic-collection.component.scss']
})
export class ComicCollectionComponent implements OnInit {
  comicSeries: Array<ComicSeries> = [];

  ngOnInit() {
    this.comicSeries.push({title: 'Urbanus', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Suske en Wiske', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Amoras', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Jommeke', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Nero', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
    this.comicSeries.push({title: 'Kuifje', image: 'https://via.placeholder.com/200x280.png'} as ComicSeries);
  }

}
