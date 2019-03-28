import {ComicSeries} from '../model/comic-series.model';
import {ComicActions, LoadComicsSuccessAction} from './actions';
import {Action} from '@ngrx/store';

export interface State {
  isLoading?: boolean;
  comicSeries: Array<ComicSeries>;
}

export const initialState = {
  isLoading: false,
  comicSeries: []
} as State;

export function comicSeriesReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ComicActions.LOAD:
      return {...state, isLoading: true};
    case ComicActions.LOAD_SUCCESS:
      const loadComicsSuccessAction = action as LoadComicsSuccessAction;
      return {...state, isLoading: false, comicSeries: [...loadComicsSuccessAction.comics]};
    default:
      return state;
  }
}
