import {MoviesType} from './movie';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'list/getMovieList',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetMovieListAction = {
  type: ActionType.GetMovieList;
  payload: MoviesType;
};

export type Actions = ChangeGenreAction | GetMovieListAction;
