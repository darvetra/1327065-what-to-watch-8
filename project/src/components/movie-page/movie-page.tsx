import {Fragment, useEffect, Dispatch} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AxiosError} from 'axios';

import {State} from '../../types/state';
import {ThunkAppDispatch, Actions} from '../../types/action';

import {fetchMovie, fetchComments, fetchSimilarMovies} from '../../store/api-actions';
import browserHistory from '../../browser-history';

import MovieList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';
import UserBlock from '../user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';

import {MAX_SIMILAR_MOVIES, RouteParams, AppRoute, ResponseStatusCodes} from '../../const';
import {checkAuthorization} from '../../utils';

const mapStateToProps = ({authorizationStatus, movie, similarMovies, comments}: State) => ({
  authorizationStatus,
  movie,
  similarMovies,
  comments,
});

const mapDispatchToProps =(dispatch: Dispatch<Actions>) => ({
  loadMovie(movieId: number) {
    return (dispatch as ThunkAppDispatch)(fetchMovie(movieId))
      .catch((error: AxiosError) => {
        if (error.response?.status === ResponseStatusCodes.NotFound) {
          browserHistory.push(AppRoute.NotFound);
        }
      });
  },
  loadSimilarMovies(movieId: number) {
    (dispatch as ThunkAppDispatch)(fetchSimilarMovies(movieId));
  },
  loadComments(movieId: number) {
    (dispatch as ThunkAppDispatch)(fetchComments(movieId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type params = {
  id: string,
}

function MoviePageScreen({authorizationStatus, movie, similarMovies, comments, loadMovie, loadSimilarMovies, loadComments}: PropsFromRedux): JSX.Element {
  const {id}: params = useParams();
  const isAuth = checkAuthorization(authorizationStatus);

  useEffect(() => {
    const movieId = Number(id);
    loadMovie(movieId)
      .then(() => {
        loadSimilarMovies(movieId);
        loadComments(movieId);
      });
  }, [id, loadMovie]);

  if (!movie) {
    return <LoadingScreen />;
  }

  const {backgroundImage, genre, name, released, posterImage} = movie;

  return (
    <Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                {isAuth &&
                <Link
                  to={AppRoute.AddReview.replace(RouteParams.ID, id)}
                  className="btn film-card__button"
                >
                  Add review
                </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">

              <Tabs currentMovie={movie} currentComments={comments}/>

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies.slice(0, MAX_SIMILAR_MOVIES)} />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export {MoviePageScreen};
export default connector(MoviePageScreen);
