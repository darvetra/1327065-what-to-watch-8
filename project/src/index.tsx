import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import {reducer} from './store/reducer';

import {promoMovie} from './mocks/promo';
import {moviesList} from './mocks/films';
import {commentsList} from './mocks/comments';

// моковые данные для превью плеера и добавления ревью
const movie = promoMovie;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App promoMovie={promoMovie} movies={moviesList} movie={movie} comments={commentsList}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
