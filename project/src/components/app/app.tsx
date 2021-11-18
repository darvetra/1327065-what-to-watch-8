import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';
import {MovieType} from '../../types/movie';
import {CommentsType} from '../../types/comment';

import {AppRoute} from '../../const';

import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MoviePageScreen from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video-player/video-player';
import NotFoundScreen from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import browserHistory from '../../browser-history';

type AppScreenProps = {
  promoMovie: MovieType,
  movie: MovieType,
  comments: CommentsType,
}

const mapStateToProps = ({movies}: State) => ({
  movies,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & AppScreenProps;

function App(props: PropsFromRedux): JSX.Element {
  const {promoMovie, movies, movie, comments} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen promoMovie={promoMovie} />
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
          <MoviePageScreen movies={movies} movie={movie} comments={comments} />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview movie={movie} />
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
