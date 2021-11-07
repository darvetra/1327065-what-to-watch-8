import {Fragment} from 'react';

import {getRating} from '../../utils';

import {MovieType} from '../../types/movie';

type MoviePageOverviewProps = {
  movie: MovieType;
}

function MoviePageOverview({movie}: MoviePageOverviewProps): JSX.Element {
  return (
    <Fragment>

      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(movie.rating)}</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description}</p>
        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {movie.starring.join(', ')}</strong></p>
      </div>

    </Fragment>
  );
}

export default MoviePageOverview;
