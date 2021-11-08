import {ActionType, ChangeGenreAction, GetMovieListAction} from '../types/action';
import {MoviesType} from '../types/movie';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getMovieListAction = (movieList: MoviesType): GetMovieListAction => ({
  type: ActionType.GetMovieList,
  payload: movieList,
});
