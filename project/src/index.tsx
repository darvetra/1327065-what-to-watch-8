import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {ThunkAppDispatch} from './types/action';

import {createAPI} from './services/api';

import {requireAuthorization} from './store/action';
import {fetchMovies, checkAuthAction} from './store/api-actions';

import {AuthorizationStatus} from './const';

import App from './components/app/app';
import {reducer} from './store/reducer';

import {promoMovie} from './mocks/promo';
import {commentsList} from './mocks/comments';

// моковые данные для превью плеера и добавления ревью
const movie = promoMovie;


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchMovies());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App promoMovie={promoMovie} movie={movie} comments={commentsList}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
