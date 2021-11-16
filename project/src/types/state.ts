import {MoviesType} from './movie';
import {Genres, AuthorizationStatus} from '../const';

export type State = {
  genre: Genres,
  movies: MoviesType,
  authorizationStatus: AuthorizationStatus,
};
