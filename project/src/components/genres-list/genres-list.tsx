import {Link} from 'react-router-dom';

import {Genres} from '../../const';

export type GenresListProps = {
  genres: Genres[],
  activeGenre: Genres,
}

const activeItem = 'catalog__genres-item--active';

function GenresList({genres, activeGenre}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={['catalog__genres-item', genre === activeGenre ? activeItem : ''].join(' ')}
          key={genre}
        >
          <Link to="#" className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
