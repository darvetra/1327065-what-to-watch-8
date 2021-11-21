import {AppData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';


export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

const initialState: AppData = {
  movies: [],
  user: initialUser,
};

const appData = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
    case ActionType.LoadMovies:
      return {...state, movies: action.payload};
    case ActionType.AuthUser:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export {appData};
