import {createReducer} from '@reduxjs/toolkit';

import {AppData} from '../../types/state';

import {loadMovies, loadPromoMovie} from '../action';
import {initialMovie} from '../../const';


const initialState: AppData = {
  movies: [],
  promoMovie: initialMovie,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
    });
});

export {appData};
