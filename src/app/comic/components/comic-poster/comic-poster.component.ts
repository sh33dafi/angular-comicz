import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'comicz-comic-poster',
  template: `
    <div class="comic-poster"
    (click)='posterSelected.emit(id)'>
      <img src='{{image}}' [alt]='title'>
      <span>{{title}}</span>
    </div>
  `,
  styleUrls: ['./comic-poster.component.scss']
})
export class ComicPosterComponent {
  @Input()
  title: string;

  @Input()
  image: string;

  @Input()
  id: number;

  @Output()
  posterSelected = new EventEmitter<number>();

}
