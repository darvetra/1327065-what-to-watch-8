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
