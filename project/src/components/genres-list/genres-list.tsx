import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import {Genres} from '../../const';

export type GenresListProps = {
  genres: Genres[],
  activeGenre: Genres,
  onChangeGenre: (genre: Genres) => void,
}

const activeItem = 'catalog__genres-item--active';

function GenresList({genres, activeGenre, onChangeGenre}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={['catalog__genres-item', genre === activeGenre ? activeItem : ''].join(' ')}
          key={genre}
        >
          <Link to="#" className="catalog__genres-link" onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onChangeGenre(genre);}}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
