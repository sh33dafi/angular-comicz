import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comicz-header',
  template: `
    <header class='header'>
      Angular Comicz
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
