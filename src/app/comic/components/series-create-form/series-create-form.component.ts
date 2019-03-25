import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComicSeries} from '../../model/comic-series.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'comicz-series-create-form',
  template: `
    <form class='form'
          [formGroup]='form'>
      <div class='form__field'>
        <label>Title</label>
        <input type='text'
               placeholder='e.g. Kuifje'
               formControlName='title'>
      </div>
      <div class='form__field'>
        <label>Author</label>
        <input type='text'
               placeholder='e.g. Hergé'
               formControlName='author'>
      </div>
      <div class='form__field'>
        <label>Image</label>
        <input type='text'
               placeholder='e.g. http://localhost:3000/static/kuifje.jpg'
               formControlName='image'>
      </div>
      <div class='form_actions'>
        <button type='button'
                (click)='cancel.emit()'>
          Cancel
        </button>
        <button type='submit'
                (click)='onSave()' [disabled]='this.form.invalid'>
          Save
        </button>
      </div>
    </form>
  `,
  styleUrls: ['./series-create-form.component.scss']
})
export class SeriesCreateFormComponent implements OnInit {
  @Output()
  cancel = new EventEmitter();
  @Output()
  save = new EventEmitter<ComicSeries>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      image: [''],
    });
  }

  onSave() {
    this.save.emit(this.form.value as ComicSeries);
  }

}
