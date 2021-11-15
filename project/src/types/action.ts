import {changeGenre, getMovieList, loadMovies, requireAuthorization, requireLogout} from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'list/getMovieList',
  LoadMovies = 'data/loadMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getMovieList>
  | ReturnType<typeof loadMovies>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;
