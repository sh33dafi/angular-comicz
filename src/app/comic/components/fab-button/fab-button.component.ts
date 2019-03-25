import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'comicz-fab-button',
  template: `
    <div class="fab"><span class='fab__text'>+</span></div>
  `,
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
