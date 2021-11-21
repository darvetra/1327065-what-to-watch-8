import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {movieProcess} from './movie-process/movie-process';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  movie = 'MOVIE',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.movie]: movieProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
