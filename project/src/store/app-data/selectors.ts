import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

import {MoviesType} from '../../types/movie';

export const getMovies = (state: State): MoviesType => state[NameSpace.data].movies;
