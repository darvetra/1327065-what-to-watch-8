import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {moviesList} from './mocks/movie';

ReactDOM.render(
  <React.StrictMode>
    <App movies={moviesList} />
  </React.StrictMode>,
  document.getElementById('root'));
