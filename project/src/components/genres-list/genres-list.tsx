import {Link} from 'react-router-dom';

function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to="#" className="catalog__genres-link">All genres</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Comedies</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Crime</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Documentary</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Dramas</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Horror</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Kids & Family</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Romance</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Sci-Fi</Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="#" className="catalog__genres-link">Thrillers</Link>
      </li>
    </ul>
  );
}

export default GenresList;
