import {createReducer} from '@reduxjs/toolkit';

import {Genres} from '../../const';
import {MovieProcess} from '../../types/state';

import {changeGenre, getMovie, getSimilarMovies, getComments} from '../action';


const initialState: MovieProcess = {
  genre: Genres.All,
  movie: null,
  comments: [],
  similarMovies: [],
};

const movieProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
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
