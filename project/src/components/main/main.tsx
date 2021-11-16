import {Fragment, useCallback, useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeGenre} from '../../store/action';

import {State} from '../../types/state';
import {MovieType} from '../../types/movie';

import {Genres} from '../../const';
import {getFilterMoviesByGenre, getMovieCardsNumber} from '../../utils';

import GenresList from '../genres-list/genres-list';
import MovieList from '../movie-list/movie-list';
import ShowMore from '../show-more/show-more';

import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-actions';

type MainScreenProps = {
  promoMovie: MovieType;
}

const mapStateToProps = ({movies, genre}: State) => ({
  movies,
  activeGenre: genre,
});

// Без использования bindActionCreators
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeGenre(genre: Genres) {
    dispatch(changeGenre(genre));
  },
  logoutSite() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {

  const {promoMovie, movies, activeGenre, onChangeGenre, logoutSite} = props;
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

  const genreChangeHandler = useCallback((genre) => {
    onChangeGenre(genre);
  }, [onChangeGenre]);

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoMovie.backgroundImage} alt={promoMovie.name}/>
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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link
                to='/'
                className="user-block__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  logoutSite();
                }}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoMovie.posterImage} alt={promoMovie.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoMovie.genre}</span>
                <span className="film-card__year">{promoMovie.released}</span>
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
