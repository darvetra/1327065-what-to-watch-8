import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {MovieType} from '../../types/movie';

import {getCurrentGenre} from '../../store/movie-process/selectors';
import {getMovies} from '../../store/app-data/selectors';
import {changeGenre} from '../../store/action';

import {AppRoute, ACTIVE_GENRE_CLASS_NAME, ALL_GENRES} from '../../const';


function GenresList(): JSX.Element {
  const activeGenre = useSelector(getCurrentGenre);
  const movies = useSelector(getMovies);

  const dispatch = useDispatch();

  const onChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  const nonUniqueGenreList = movies.map((movie: MovieType) => movie.genre);
  const uniqueGenreList = new Set(nonUniqueGenreList);
  const fullGenreList = [ALL_GENRES, ...uniqueGenreList];

  return (
    <ul className="catalog__genres-list">
      {fullGenreList.map((genre) => (
        <li
          className={['catalog__genres-item', genre === activeGenre ? ACTIVE_GENRE_CLASS_NAME : ''].join(' ')}
          key={genre}
        >
          <Link to={AppRoute.Main}
            className="catalog__genres-link"
            onClick={(evt) => {
              onChangeGenre(evt.currentTarget.innerText);
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
