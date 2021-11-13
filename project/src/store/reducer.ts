import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {Genres} from '../const';
import {getFilterMoviesByGenre} from '../utils';

import {moviesList} from '../mocks/films';


const initialState = {
  genre: Genres.All,
  movies: moviesList,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetMovieList:
      return {...state, movies: getFilterMoviesByGenre(action.payload, state.genre)};
    default:
      return state;
  }
};

export {reducer};
