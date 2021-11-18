import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {getToken} from './token';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallback = () => void;

/**
 * Создадим отдельный модуль и опишем в нём функцию `createAPI`.
 * В ней сконфигурируем экземпляр `axios`. При последующем работе с API
 * нам потребуется учесть, что сервер в некоторых случаях может возвращать
 * в качестве статус-кода `401` (неавторизован).
 *
 * Эту ошибку можно обрабатывать в том месте, где будет происходить вызов
 * API, а можно обработать глобально. Для этого воспользуемся механизмом
 * перехватчиков (interceptors). С помощью этого механизма, мы сможем
 * обработать запрос до того, как он доберётся к функции, в которой
 * происходило обращение к API.
 * @param onUnauthorized
 */
export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  /**
   Мы определись с местом хранения токена, теперь нужно обновить модуль,
   где происходит конфигурирование axios. Добавим извлечение токена из
   `localStorage` и вставим его в заголовки. Для этого нам потребуется
   вновь воспользоваться перехватчиками. Только на этот раз, перехватчиком
   запроса.

   Настраиваем перехватчик, который будет вызывать формирования запроса,
   но до его отправки серверу. Здесь мы сможем модифицировать
   конфигурацию axios.
   */
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  return api;
};
