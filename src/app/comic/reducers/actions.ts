import {Action} from '@ngrx/store';
import {ComicSeries} from '../model/comic-series.model';

export enum ComicActions {
  LOAD = 'LOAD',
  LOAD_SUCCESS = 'LOAD_SUCCESS'
}

export class LoadComicsAction implements Action {
  type = ComicActions.LOAD;
}

export class LoadComicsSuccessAction implements Action {
  type = ComicActions.LOAD_SUCCESS;
  constructor(readonly comics: Array<ComicSeries>) {}
}

export type Actions = LoadComicsAction | LoadComicsSuccessAction;
