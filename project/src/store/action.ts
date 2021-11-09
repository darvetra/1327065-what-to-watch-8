import {
  ActionType,
  ChangeGenreActionType,
  GetMovieListActionType,
  GetAllGenresActionType
} from '../types/action';
import {MoviesType} from '../types/movie';

export const changeGenre = (genre: string): ChangeGenreActionType => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getMovieList = (movieList: MoviesType): GetMovieListActionType => ({
  type: ActionType.GetMovieList,
  payload: movieList,
});

export const GetAllGenres = (movieList: MoviesType): GetAllGenresActionType => ({
  type: ActionType.GetAllGenres,
  payload: movieList,
});
