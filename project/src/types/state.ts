import {MoviesType, MovieType} from './movie';
import {Genres, AuthorizationStatus} from '../const';
import {UserType} from './user';
import {CommentsType} from './comment';

export type State = {
  genre: Genres,
  movies: MoviesType,
  movie: MovieType | null,
  comments: CommentsType,
  similarMovies: MoviesType,
  authorizationStatus: AuthorizationStatus,
  user: UserType,
};
