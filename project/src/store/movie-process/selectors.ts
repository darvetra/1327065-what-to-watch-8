import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {MoviesType, MovieType} from '../../types/movie';

import {CommentsType} from '../../types/comment';


export const getCurrentGenre = (state: State): string => state[NameSpace.movie].currentGenre;
export const getMovie = (state: State): MovieType | null => state[NameSpace.movie].movie;
export const getSimilarMovies = (state: State): MoviesType => state[NameSpace.movie].similarMovies;
export const getComments = (state: State): CommentsType => state[NameSpace.movie].comments;
