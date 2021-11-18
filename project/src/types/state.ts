import {MoviesType} from './movie';
import {Genres, AuthorizationStatus} from '../const';
import {UserType} from './user';

export type State = {
  genre: Genres,
  movies: MoviesType,
  authorizationStatus: AuthorizationStatus,
  user: UserType,
};
