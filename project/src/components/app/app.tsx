import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import browserHistory from '../../browser-history';

import {State} from '../../types/state';
import {MovieType} from '../../types/movie';

import {AppRoute} from '../../const';

import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MoviePageScreen from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video-player/video-player';
import NotFoundScreen from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import {getMovies} from '../../store/app-data/selectors';

type AppScreenProps = {
  movie: MovieType,
}

const mapStateToProps = (state: State) => ({
  movies: getMovies(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & AppScreenProps;

function App(props: PropsFromRedux): JSX.Element {
  const {movies, movie} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={(history) => <MyListScreen movies={movies} />}
        />
        <Route exact path={AppRoute.Film}>
          <MoviePageScreen />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
        <Route exact path={AppRoute.Player}>
          <VideoPlayer movie={movie} autoPlay muted />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
