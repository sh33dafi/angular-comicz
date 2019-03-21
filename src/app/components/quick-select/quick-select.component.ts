import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'comicz-quick-select',
  template: `
    <nav class='quick-select'>
      <ul class='quick-select__list'>
        <li class='quick-select__list-item'
        (click)='selectWholeCollection.emit()'>
          All
        </li>
        <li class='quick-select__list-item'
            *ngFor='let quickSelect of quickSelects'
            (click)='selectCollection.emit(quickSelect)'>
          {{quickSelect | uppercase}}
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./quick-select.component.scss']
})
export class QuickSelectComponent implements OnInit {
  @Output()
  selectCollection = new EventEmitter<string>();

  @Output()
  selectWholeCollection = new EventEmitter();

  quickSelects: Array<string> = [];

  constructor() {
  }

  ngOnInit() {
    this.quickSelects = this.generateChars();
  }

  private generateChars(): Array<string> {
    const chars: Array<string> = [];
    const start = 'A'.charCodeAt(0);
    const stop = 'Z'.charCodeAt(0);
    for (let charCode = start; charCode <= stop; charCode++) {
      chars.push(String.fromCharCode(charCode));
    }
    return chars;
  }

}
