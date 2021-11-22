import {MoviesType, MovieType} from './movie';
import {Genres, AuthorizationStatus} from '../const';
import {UserType} from './user';
import {CommentsType} from './comment';
import {RootState} from '../store/root-reducer';


export type AppData = {
  movies: MoviesType,
  promoMovie: MovieType,
  user: UserType,
}

export type MovieProcess = {
  genre: Genres,
  movie: MovieType | null,
  comments: CommentsType,
  similarMovies: MoviesType,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
}

export type State = RootState;
