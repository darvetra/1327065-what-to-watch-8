import {changeGenre, getMovieList} from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'list/getMovieList',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getMovieList>;
