import {createReducer} from '@reduxjs/toolkit';

import {AppData} from '../../types/state';

import {loadMovies, loadPromoMovie, authUser} from '../action';
import {initialMovie, initialUser} from '../../const';


const initialState: AppData = {
  movies: [],
  promoMovie: initialMovie,
  user: initialUser,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
    })
    .addCase(authUser, (state, action) => {
      state.user = action.payload;
    });
});

export {appData};
