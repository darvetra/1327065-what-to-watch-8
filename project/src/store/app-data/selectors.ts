import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

import {MoviesType, MovieType} from '../../types/movie';

export const getMovies = (state: State): MoviesType => state[NameSpace.data].movies;
export const getPromoMovie = (state: State): MovieType => state[NameSpace.data].promoMovie;
