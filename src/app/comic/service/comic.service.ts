import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ComicSeries} from '../model/comic-series.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private static BASE_URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {
  }

  getAllComicSeries(filter: string = null): Observable<Array<ComicSeries>> {
    let url = `${ComicService.BASE_URL}/series`;
    if (filter) {
      url = `${url}?filter=${filter}`;
    }
    return this.httpClient.get<Array<ComicSeries>>(url);
  }
}
