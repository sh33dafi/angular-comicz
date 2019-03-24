import {Component, Input} from '@angular/core';
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
export class ComicCollectionComponent {
  @Input()
  comicSeries: Array<ComicSeries>;

}
