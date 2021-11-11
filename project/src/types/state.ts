import {MoviesType} from './movie';
import {Genres} from '../const';

export type State = {
  genre: Genres,
  movies: MoviesType,
};
