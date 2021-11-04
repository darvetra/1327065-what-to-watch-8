import {MoviesType} from '../../types/movie';
import MovieCover from '../movie-cover/movie-cover';

type MovieListProps = {
  movies: MoviesType;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  return (
    <div className="catalog__films-list">

      {movies.map((movie) => <MovieCover movie={movie} key={movie.id} />)}

    </div>
  );
}

export default MovieList;
