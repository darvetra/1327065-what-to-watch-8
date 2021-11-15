import {changeGenre, getMovieList, loadMovies} from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'list/getMovieList',
  LoadMovies = 'data/loadMovies',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getMovieList>
  | ReturnType<typeof loadMovies>;
