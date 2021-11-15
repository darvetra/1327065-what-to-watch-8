import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {AuthorizationStatus, Genres} from '../const';
import {getFilterMoviesByGenre} from '../utils';

// убрать, когда подключишь сервер
import {moviesList} from '../mocks/films';

const initialState = {
  genre: Genres.All,
  movies: moviesList,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetMovieList:
      return {...state, movies: getFilterMoviesByGenre(action.payload, state.genre)};
    case ActionType.LoadMovies:
      return {...initialState, movies: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
