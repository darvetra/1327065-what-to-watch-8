import {
  ActionType,
  ChangeGenreActionType,
  GetMovieListActionType,
  GetAllGenresActionType
} from '../types/action';
import {MoviesType} from '../types/movie';
import {Genres} from '../const';

export const changeGenre = (genre: Genres): ChangeGenreActionType => ({
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
