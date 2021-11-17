import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';

import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';

import {loadMovies, requireAuthorization, redirectToRoute, requireLogout} from './action';

import {ServerMovieType} from '../types/movie';
import {adaptMovieToClient} from '../services/adapter';

export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverMovies} = await api.get(APIRoute.Films);
    const moviesData = serverMovies.map((serverMovie: ServerMovieType) => adaptMovieToClient(serverMovie));
    dispatch(loadMovies(moviesData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
