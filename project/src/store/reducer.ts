import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {AuthorizationStatus, Genres} from '../const';
import {getFilterMoviesByGenre} from '../utils';

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

export const initialPromoMovie = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

const initialState = {
  genre: Genres.All,
  promoFilm: initialPromoMovie,
  movies: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
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
    case ActionType.AuthUser:
      return {...state, user: action.payload} as State;
    default:
      return state;
  }
};

export {reducer};
