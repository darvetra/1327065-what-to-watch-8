import MainScreen from '../main/main';
import {MoviesType, MovieType} from '../../types/movie';

type AppScreenProps = {
  promoMovie: MovieType;
  movies: MoviesType;
}

function App({promoMovie, movies}: AppScreenProps): JSX.Element {
  return (
    <MainScreen promoMovie={promoMovie} movies={movies} />
  );
}

export default App;
