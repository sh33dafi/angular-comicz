import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComicSeries} from '../../model/comic-series.model';
import {ComicService} from '../../service/comic.service';

@Component({
  selector: 'comicz-comic-series-create',
  template: `
    <h1>Create new serie</h1>
    <comicz-series-create-form
      (cancel)='onCancel()'
      (save)='onSave($event)'></comicz-series-create-form>
  `,
  styleUrls: ['./comic-series-create.container.scss']
})
export class ComicSeriesCreateContainer implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private comicService: ComicService) {
  }

  ngOnInit() {
  }

  onCancel() {
    this.navigateToOverview();
  }

  onSave(comicSeries: ComicSeries) {
    console.log('save', comicSeries);
    this.comicService.createSeries(comicSeries).subscribe(() => {
      this.navigateToOverview();
    });

  }

  private navigateToOverview() {
    this.router.navigate(['..', 'overview'], {relativeTo: this.route});
  }
}
