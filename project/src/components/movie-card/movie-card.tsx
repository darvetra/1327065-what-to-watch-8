import {MovieType} from '../../types/movie';
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

function MovieCard(props: {movie: MovieType}): JSX.Element {

  const [movieCardHover, setMovieCardHover] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if(movieCardHover) {

      // До момента реализации воспроизведения видео по наведению на карточку фильма, иначе просто movieCardHover нигде не используется, что странно

      /* eslint-disable no-alert, no-console */
      console.log('работает');
    }
  });

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setMovieCardHover(true)}
      onMouseLeave={() => setMovieCardHover(false)}
      onClick={() => history.push(`/films/${props.movie.id}`)}
    >
      <div className="small-film-card__image">
        <img src={props.movie.previewImage} alt={props.movie.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={''}>{props.movie.name}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
