import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {MovieTypeFromServer} from '../types/movie';
import {UserTypeFromServer} from '../types/user';

import {saveToken, dropToken} from '../services/token';
import {adaptMovieToClient, adaptToClientUser} from '../services/adapter';
import {HttpCode} from '../services/api';
import {initialUser} from './reducer';

import {APIRoute, AuthorizationStatus, AppRoute} from '../const';

import {loadMovies, requireAuthorization, redirectToRoute, requireLogout, authUser} from './action';


export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverMovies} = await api.get(APIRoute.Films);
    const moviesData = serverMovies.map((serverMovie: MovieTypeFromServer) => adaptMovieToClient(serverMovie));
    dispatch(loadMovies(moviesData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(({status, data}) => {
        if (status && status !== HttpCode.Unauthorized) {
          dispatch(requireAuthorization(AuthorizationStatus.Auth));
          dispatch(authUser(adaptToClientUser(data)));
          return;
        }
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<UserTypeFromServer>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(authUser(adaptToClientUser(data)));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(authUser(initialUser));
  };
