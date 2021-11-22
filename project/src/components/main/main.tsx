import {Fragment, useCallback, useEffect, useState} from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Dispatch} from '@reduxjs/toolkit';

import {changeGenre} from '../../store/action';

import {State} from '../../types/state';

import {Genres} from '../../const';
import {getFilterMoviesByGenre, getMovieCardsNumber} from '../../utils';

import GenresList from '../genres-list/genres-list';
import MovieList from '../movie-list/movie-list';
import ShowMore from '../show-more/show-more';

import UserBlock from '../user-block/user-block';

import {getCurrentGenre} from '../../store/movie-process/selectors';
import {getMovies} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getPromoMovie} from '../../store/app-data/selectors';


const mapStateToProps = (state: State) => ({
  movies: getMovies(state),
  activeGenre: getCurrentGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
});

// Без использования bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: Genres) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const {movies, activeGenre, onChangeGenre} = props;

  const promoMovie = useSelector(getPromoMovie);
  const {name, genre, released, posterImage, backgroundImage} = promoMovie;

  const genres = Object.values(Genres) as Genres[];

  const [filteredMovies, setFilteredMovies] = useState(getFilterMoviesByGenre(movies, activeGenre));
  const [showMoviesNumber, setShowMoviesNumber] = useState(getMovieCardsNumber(filteredMovies.length));
  const [isLoadMore, setIsLoadMore] = useState(showMoviesNumber < filteredMovies.length);

  useEffect(() => {
    setFilteredMovies(() => getFilterMoviesByGenre(movies, activeGenre));
  }, [activeGenre, movies]);

  useEffect(() => {
    setShowMoviesNumber(getMovieCardsNumber(filteredMovies.length));
  }, [filteredMovies, filteredMovies.length]);

  useEffect(() => {
    setIsLoadMore(showMoviesNumber < filteredMovies.length);
  }, [showMoviesNumber, filteredMovies.length]);

  const onShowMore = useCallback(() => {
    setShowMoviesNumber((moviesNumber) => getMovieCardsNumber(filteredMovies.length, moviesNumber));
  }, [filteredMovies.length]);

  const genreChangeHandler = useCallback((genreInList) => {
    onChangeGenre(genreInList);
  }, [onChangeGenre]);

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link to={''} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genres}
            activeGenre={activeGenre}
            onChangeGenre={genreChangeHandler}
          />

          <MovieList
            movies={filteredMovies.slice(0, showMoviesNumber)}
            render={isLoadMore && (() => <ShowMore onShowMore={onShowMore} />)}
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={''} className="logo__link logo__link--light">
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

export {MainScreen};
export default connector(MainScreen);
