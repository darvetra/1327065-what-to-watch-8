import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

import {State} from './state';
import {
  changeGenre,
  getMovie,
  getComments,
  loadMovies,
  requireAuthorization,
  requireLogout,
  authUser,
  redirectToRoute,
  getSimilarMovies
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetMovie = 'data/getMovie',
  GetComments = 'data/getComments',
  GetSimilarMovies = 'data/getSimilarMovies',
  LoadMovies = 'data/loadMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  AuthUser = 'user/authUser',
  RedirectToRoute = 'list/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getMovie>
  | ReturnType<typeof getComments>
  | ReturnType<typeof getSimilarMovies>
  | ReturnType<typeof loadMovies>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof authUser>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
