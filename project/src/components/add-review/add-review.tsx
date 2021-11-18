import {MovieType} from '../../types/movie';
import {Link} from 'react-router-dom';

import CommentForm from '../comment-form/comment-form';
import UserBlock from '../user-block/user-block';

function AddReview(props: {movie: MovieType}): JSX.Element {

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={props.movie.backgroundImage} alt={props.movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${props.movie.id}`} className="breadcrumbs__link">{props.movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to='/' className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={props.movie.posterImage} alt={`${props.movie.name} poster`} width="218" height="327"/>
        </div>
      </div>

      {
        <CommentForm  />
      }

    </section>
  );
}

export default AddReview;
