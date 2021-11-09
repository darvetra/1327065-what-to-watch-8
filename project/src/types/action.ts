import {MoviesType} from './movie';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'list/getMovieList',
  GetAllGenres = 'list/getAllGenres'
}

export type ChangeGenreActionType = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetMovieListActionType = {
  type: ActionType.GetMovieList;
  payload: MoviesType;
};

export type GetAllGenresActionType = {
  type: ActionType.GetAllGenres;
  payload: MoviesType;
};

export type Actions = ChangeGenreActionType | GetMovieListActionType | GetAllGenresActionType;
