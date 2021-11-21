import {Actions, ActionType} from '../../types/action';
import {Genres} from '../../const';
import {MovieProcess} from '../../types/state';


const initialState: MovieProcess = {
  genre: Genres.All,
  movie: null,
  comments: [],
  similarMovies: [],
};

const movieProcess = (state = initialState, action: Actions): MovieProcess => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetMovie:
      return {...state, movie: action.payload};
    case ActionType.GetSimilarMovies:
      return {...state, similarMovies: action.payload};
    case ActionType.GetComments:
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export {movieProcess};
