import {MovieType} from '../../types/movie';
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import MovieCover from '../movie-cover/movie-cover';
import VideoPlayback from '../video-playback/video-playback';

type MovieCardProps = {
  movie: MovieType;
}

function MovieCard({movie}: MovieCardProps): JSX.Element {

  const [isHovered, setHovered] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if(isHovered) {

      // До момента реализации воспроизведения видео по наведению на карточку фильма, иначе просто isHovered нигде не используется, что странно

      /* eslint-disable no-alert, no-console */
      console.log('работает');
    }
  });

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
