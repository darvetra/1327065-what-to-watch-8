import {ActionType} from '../types/action';
import {MoviesType} from '../types/movie';
import {Genres} from '../const';

export const changeGenre = (genre: Genres) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getMovieList = (movies: MoviesType) => ({
  type: ActionType.GetMovieList,
  payload: movies,
} as const);

export const loadMovies = (movies: MoviesType) => ({
  type: ActionType.LoadMovies,
  payload: movies,
} as const);
