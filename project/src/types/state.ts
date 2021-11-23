import {MoviesType, MovieType} from './movie';
import {AuthorizationStatus} from '../const';
import {UserType} from './user';
import {CommentsType} from './comment';
import {RootState} from '../store/root-reducer';


export type AppData = {
  movies: MoviesType,
  promoMovie: MovieType,
}

export type MovieProcess = {
  currentGenre: string,
  movie: MovieType | null,
  comments: CommentsType,
  similarMovies: MoviesType,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserType,
}

export type State = RootState;
