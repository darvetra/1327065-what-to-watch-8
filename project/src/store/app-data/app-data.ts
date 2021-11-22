import {createReducer} from '@reduxjs/toolkit';

import {AppData} from '../../types/state';

import {loadMovies, authUser} from '../action';


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

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(authUser, (state, action) => {
      state.user = action.payload;
    });
});

export {appData};
