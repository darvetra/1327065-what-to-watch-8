import {toast} from 'react-toastify';

import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {MovieTypeFromServer} from '../types/movie';
import {UserTypeFromServer} from '../types/user';
import {CommentsType, CommentPost, CommentTypeAdaptedToServer} from '../types/comment';

import {saveToken, dropToken} from '../services/token';
import {adaptMovieToClient, adaptUserToClient} from '../services/adapter';
import {HttpCode} from '../services/api';
import {initialUser} from './reducer';

import {APIRoute, AuthorizationStatus, AppRoute, RouteParams} from '../const';

import {
  loadMovies,
  requireAuthorization,
  redirectToRoute,
  requireLogout,
  authUser,
  getMovie,
  getSimilarMovies,
  getComments
} from './action';


const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';


export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverMovies} = await api.get(APIRoute.Films);
    const moviesData = serverMovies.map((serverMovie: MovieTypeFromServer) => adaptMovieToClient(serverMovie));
    dispatch(loadMovies(moviesData));
  };

export const fetchMovie = (movieId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<MovieTypeFromServer>(APIRoute.Film.replace(RouteParams.ID, movieId.toString()));
    const adaptedData = adaptMovieToClient(data);
    dispatch(getMovie(adaptedData));
  };

export const fetchComments = (movieId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<CommentsType>(APIRoute.FilmComments.replace(RouteParams.FILM_ID, movieId.toString()));
    dispatch(getComments(data));
    // const adaptedData = data.map((comment) => adaptCommentToClient(comment));
    // dispatch(getComments(adaptedData));
  };

export const submitComment = ({movieId, commentPost}: {commentPost: CommentPost, movieId: number}): ThunkActionResult =>
  async (dispatch, _getState, api) : Promise<void> => {
    const {data} = await api.post<CommentTypeAdaptedToServer[]>(APIRoute.FilmComments.replace(RouteParams.FILM_ID, movieId.toString()), commentPost);
    dispatch(getComments(data));
  };

export const fetchSimilarMovies = (movieId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<MovieTypeFromServer[]>(APIRoute.SimilarFilms.replace(RouteParams.ID, movieId.toString()));
    const adaptedData = data.map((movie) => adaptMovieToClient(movie));
    dispatch(getSimilarMovies(adaptedData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then(({status, data}) => {
          if (status && status !== HttpCode.Unauthorized) {
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
            dispatch(authUser(adaptUserToClient(data)));
            return;
          }
          dispatch(requireAuthorization(AuthorizationStatus.Auth));
        });
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<UserTypeFromServer>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(authUser(adaptUserToClient(data)));
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
