import {SHOW_MOVIE_CARDS, MIN_MESSAGE_LENGTH, MAX_MESSAGE_LENGTH, ALL_GENRES} from './const';
import {MoviesType} from './types/movie';


/**
 * Возвращает время в человеческом формате (в часах и минутах)
 * @param timeInMinutes - время в минутах
 */
export const getRunTime = (timeInMinutes : number) : string => {
  const hours =  Math.floor(timeInMinutes/60);
  const minutes = timeInMinutes%60;

  return `${hours}h ${minutes}m`;
};

/**
 * Возвращает рейтинг в текстовом виде
 * @param rating
 */
export const getRating = (rating: number) : string => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  }

  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if (rating >= 5 && rating < 8) {
    return 'Good';
  }

  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }

  if (rating === 10) {
    return 'Awesome';
  }

  return 'Incorrect rating';
};

/**
 * Фильтрует фильмы по жанру
 * @param movies
 * @param genre
 */
export const getFilterMoviesByGenre = (movies: MoviesType, genre: string) : MoviesType => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

/**
 * Рассчитывает количество выводимых карточек фильмов
 * @param movieListLength
 * @param currentCount
 * @param showCards
 */
export const getMovieCardsNumber = (
  movieListLength: number,
  currentCount = 0,
  showCards = SHOW_MOVIE_CARDS) : number => Math.min(movieListLength, currentCount + showCards);

/**
 * проверяет длину комментария
 * @param text
 * @param min
 * @param max
 */
export const validateTextLength = (text: string, min = MIN_MESSAGE_LENGTH, max = MAX_MESSAGE_LENGTH): boolean => text.length > min && text.length <= max;

