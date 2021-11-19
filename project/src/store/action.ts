import {ActionType} from '../types/action';
import {MoviesType, MovieType} from '../types/movie';
import {AppRoute, AuthorizationStatus, Genres} from '../const';
import {UserType} from '../types/user';

export const changeGenre = (genre: Genres) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getMovieList = (movies: MoviesType) => ({
  type: ActionType.GetMovieList,
  payload: movies,
} as const);

export const getMovie = (movie: MovieType) => ({
  type: ActionType.GetMovie,
  payload: movie,
} as const);

export const getSemilarMovies = (movies: MoviesType) => ({
  type: ActionType.GetSemilarMovies,
  payload: movies,
} as const);

export const loadMovies = (movies: MoviesType) => ({
  type: ActionType.LoadMovies,
  payload: movies,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const authUser = (user: UserType) => ({
  type: ActionType.AuthUser,
  payload: user,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
