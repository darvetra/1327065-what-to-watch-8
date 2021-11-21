import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {MoviesType, MovieType} from '../types/movie';
import {AppRoute, AuthorizationStatus, Genres} from '../const';
import {UserType} from '../types/user';
import {CommentsType} from '../types/comment';

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre: Genres) => ({
    payload: genre,
  }),
);

export const getMovie = createAction(
  ActionType.GetMovie,
  (movie: MovieType) => ({
    payload: movie,
  }),
);

export const getComments = createAction(
  ActionType.GetComments,
  (comments: CommentsType) => ({
    payload: comments,
  }),
);

export const getSimilarMovies = createAction(
  ActionType.GetSimilarMovies,
  (movies: MoviesType) => ({
    payload: movies,
  }),
);

export const loadMovies = createAction(
  ActionType.LoadMovies,
  (movies: MoviesType) => ({
    payload: movies,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const authUser = createAction(
  ActionType.AuthUser,
  (user: UserType) => ({
    payload: user,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
