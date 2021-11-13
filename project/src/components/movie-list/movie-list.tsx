import {Fragment} from 'react';

import {MoviesType} from '../../types/movie';

import MovieCard from './movie-card';

type MovieListProps = {
  movies: MoviesType,
  render?: (() => JSX.Element) | false,
}

function MovieList({movies, render}: MovieListProps): JSX.Element {
  return (
    <Fragment>
      <div className="catalog__films-list">

        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

      </div>

      {render && render()}

    </Fragment>
  );
}

export default MovieList;
