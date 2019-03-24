import {Component, Input} from '@angular/core';

@Component({
  selector: 'comicz-comic-poster',
  template: `
    <div class='comic-poste'>
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

}
