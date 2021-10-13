import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {promoMovie} from './mocks/promo';
import {moviesList} from './mocks/movie';

ReactDOM.render(
  <React.StrictMode>
    <App promoMovie={promoMovie} movies={moviesList} />
  </React.StrictMode>,
  document.getElementById('root'));
