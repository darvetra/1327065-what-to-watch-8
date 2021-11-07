import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import {MoviesType, MovieType} from '../../types/movie';
import {CommentsType} from '../../types/comment';

import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MoviePageScreen from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video/video-player/video-player';
import NotFoundScreen from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  promoMovie: MovieType,
  movies: MoviesType,
  movie: MovieType,
  comments: CommentsType,
}

function App({promoMovie, movies, movie, comments}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen promoMovie={promoMovie} movies={movies} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen movies={movies} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <MoviePageScreen movie={movie} comments={comments} />
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

export default App;
