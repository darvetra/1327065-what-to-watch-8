import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {promoMovie} from './mocks/promo';
import {moviesList} from './mocks/films';

// моковые данные для превью плеера
const movie = moviesList[0];

ReactDOM.render(
  <React.StrictMode>
    <App promoMovie={promoMovie} movies={moviesList} movie={movie}/>
  </React.StrictMode>,
  document.getElementById('root'));
