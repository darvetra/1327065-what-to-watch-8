import {createReducer} from '@reduxjs/toolkit';

import {ALL_GENRES} from '../../const';
import {MovieProcess} from '../../types/state';

import {changeGenre, getMovie, getSimilarMovies, getComments} from '../action';


const initialState: MovieProcess = {
  currentGenre: ALL_GENRES,
  movie: null,
  comments: [],
  similarMovies: [],
};

const movieProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(getMovie, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(getSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {movieProcess};
