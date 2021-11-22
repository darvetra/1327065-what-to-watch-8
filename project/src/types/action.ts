import {Action} from '@reduxjs/toolkit';

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

import {State} from './state';


export enum ActionType {
  ChangeGenre = 'movie/changeGenre',
  GetMovie = 'movie/getMovie',
  GetComments = 'movie/getComments',
  GetSimilarMovies = 'movie/getSimilarMovies',
  LoadMovies = 'data/loadMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  AuthUser = 'data/authUser',
  RedirectToRoute = 'list/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
