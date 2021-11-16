import {MovieType, ServerMovieType} from '../types/movie';

export const adaptMovieToClient = (serverMovie: ServerMovieType): MovieType => ({
  id: serverMovie['id'],
  name: serverMovie['name'],
  posterImage: serverMovie['poster_image'],
  previewImage: serverMovie['preview_image'],
  backgroundImage: serverMovie['background_image'],
  backgroundColor: serverMovie['background_color'],
  videoLink: serverMovie['video_link'],
  previewVideoLink: serverMovie['preview_video_link'],
  description: serverMovie['description'],
  rating: serverMovie['rating'],
  scoresCount: serverMovie['scores_count'],
  director: serverMovie['director'],
  starring: serverMovie['starring'],
  runTime: serverMovie['run_time'],
  genre: serverMovie['genre'],
  released: serverMovie['released'],
  isFavorite: serverMovie['is_favorite'],
});
