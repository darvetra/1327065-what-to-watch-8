import {MovieType} from '../../types/movie';

type MovieCoverProps = {
  movie: MovieType;
}

function MovieCover({movie}: MovieCoverProps): JSX.Element {

  return (
    <img src={movie.previewImage} alt={movie.name} width="280" height="175"/>
  );
}

export default MovieCover;
