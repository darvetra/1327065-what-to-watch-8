import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

import {State} from './state';
import {
  changeGenre,
  getMovieList,
  getMovie,
  loadMovies,
  requireAuthorization,
  requireLogout,
  authUser,
  redirectToRoute,
  getSemilarMovies
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovieList = 'data/getMovieList',
  GetMovie = 'data/getMovie',
  GetSemilarMovies = 'data/getSemilarMovies',
  LoadMovies = 'data/loadMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  AuthUser = 'user/authUser',
  RedirectToRoute = 'list/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getMovieList>
  | ReturnType<typeof getMovie>
  | ReturnType<typeof getSemilarMovies>
  | ReturnType<typeof loadMovies>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof authUser>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
