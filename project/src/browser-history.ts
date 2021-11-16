/**
 * Создает новый экземпляр объекта для работы с History API
 *
 * Пока вся маршрутизация в приложении осуществляется с помощью компонентов.
 * Для перенаправления у нас есть `Redirect`, а заодно служебный пропс,
 * предоставляющий доступ к обёртке над History API.
 *
 * Но как быть если требуется выполнить перенаправление по какому-либо
 * маршруту не из компонента? Например, из действия. Компонент `Redirect`
 * нам тут не поможет. Служебный проп тоже.
 *
 * Для этого мы можем воспользоваться пакетом `history`. React router зависит
 * от этого пакета, но не предоставляет возможности использовать его снаружи.
 *
 * Создадим модуль `browser-history.js` и напишем код
 * инициализации нового экземпляра объекта для работы с History API.
 */
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();

export default browserHistory;

/**
 * Компонент `BrowserRouter` в App автоматически создаёт объект для работы с
 * историей. Текущий компонент позволяет делать это самостоятельно.
 *
 * Раз так, то нам необходимо чтобы `Router` пользовался нашим экземпляром
 * объекта `history`, а не собственным.
 *
 * К сожалению, компонент `BrowserRouter` не позволяет этого сделать,
 * но в пакете `react-router-dom` есть другой компонент – `Router`.
 * Основное его отличие от `BrowserRouter` — конфигурируемость.
 *
 * Например, чтобы воспользоваться нашим экземпляром `history`, достаточно
 * передать его в соответствующий проп, в `history`.
 */