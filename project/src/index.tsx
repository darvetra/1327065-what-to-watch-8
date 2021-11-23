import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {createAPI} from './services/api';

import {requireAuthorization} from './store/action';
import {fetchMovies, checkAuthAction, fetchPromoMovie} from './store/api-actions';

import {AuthorizationStatus} from './const';

import App from './components/app/app';
import {rootReducer} from './store/root-reducer';

import {promoMovie} from './mocks/promo';

import {redirect} from './store/middlewares/redirect';


// моковые данные для превью плеера и добавления ревью
const movie = promoMovie;


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));


/**
 * При работе с Redux приходится писать много шаблонного кода. Редьюсеры,
 * создатели действий — яркие тому примеры. Redux кажется слишком
 * многословным и избыточным с точки зрения кода.
 *
 * Упростить работу с Redux поможет отдельный пакет Redux Toolkit (RTK).
 * Это не замена Redux. Это более удобный API и наличие готовой
 * функциональности, которую рано или поздно пришлось бы написать
 * самостоятельно. RTK упростит конфигурирование хранилища и избавит от
 * написания шаблонного кода.
 *
 * Внедрять RTK в проект начнём постепенно. Сначала сконфигурируем
 * хранилище. Для этого воспользуемся функцией `configureStore`.
 * Обратите внимание, нам больше не требуется дополнительный пакет
 * `composeWithDevTools`, а также подключение Redux Thunk.
 * Всё это доступно по умолчанию.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App movie={movie} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
