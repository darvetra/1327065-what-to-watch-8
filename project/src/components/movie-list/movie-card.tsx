import {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {MovieType} from '../../types/movie';

import MovieCover from './movie-cover';
import VideoPlayback from '../video-player/video-playback';

type MovieCardProps = {
  movie: MovieType;
}

function MovieCard({movie}: MovieCardProps): JSX.Element {

  const [isHovered, setHovered] = useState(false);
  const activeRef = useRef<boolean>(false);
  const history = useHistory();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        activeRef.current = true;

        setTimeout(() => {
          if (activeRef.current) {
            setHovered(true);
          }
        }, 1000);
      }}
      onMouseLeave={() => {
        activeRef.current = false;
        setHovered(false);
      }}
      onClick={() => history.push(`/films/${movie.id}`)}
    >
      <div className="small-film-card__image">

        {isHovered ? <VideoPlayback movie={movie} autoPlay muted /> : <MovieCover movie={movie} />}

      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={''}>{movie.name}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
