import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';

@Component({
  selector: 'comicz-comic-collection',
  template: `
    <ul class='comic-collection'>
      <li class='comic-collection__item'
          *ngFor='let comicSerie of comicSeries'>
        <comicz-comic-poster
          [title]='comicSerie.title'
          [image]='comicSerie.image'
          [id]='comicSerie.id'
          (posterSelected)='posterSelected.emit($event)'></comicz-comic-poster>
      </li>
    </ul>
  `,
  styleUrls: ['./comic-collection.component.scss']
})
export class ComicCollectionComponent {
  @Input()
  comicSeries: Array<ComicSeries>;

  @Output()
  posterSelected = new EventEmitter<number>();

}
