import {MoviesType} from '../../types/movie';

import MovieCard from './movie-card';

type MovieListProps = {
  movies: MoviesType;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  return (
    <div className="catalog__films-list">

      {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

    </div>
  );
}

export default MovieList;
