import {ActionType} from '../types/action';
import {MoviesType} from '../types/movie';
import {Genres} from '../const';

export const changeGenre = (genre: Genres) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getMovieList = (movieList: MoviesType) => ({
  type: ActionType.GetMovieList,
  payload: movieList,
} as const);
