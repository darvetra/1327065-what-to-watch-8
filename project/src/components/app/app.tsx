import MainScreen from '../main/main';
import {MoviesType} from '../../types/movie';

type AppScreenProps = {
  movies: MoviesType;
}

function App({movies}: AppScreenProps): JSX.Element {
  return (
    <MainScreen movies={movies} />
  );
}

export default App;
