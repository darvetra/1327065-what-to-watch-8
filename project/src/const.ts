export const SHOW_MOVIE_CARDS = 8;
export const MAX_SIMILAR_MOVIES = 4;

export const MIN_MESSAGE_LENGTH = 50;
export const MAX_MESSAGE_LENGTH = 400;

export const RATING_DEFAULT = '8';
export const RATING_MAX = 10;

export enum TextRating {
  Zero = 0,
  Bad = 3,
  Normal = 5,
  Good = 8,
  Awesome = 10,
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
}

export const RouteParams = {
  ID: ':id',
  FILM_ID: ':film_id',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ResponseStatusCodes {
  BadRequest = 400,
  NotFound = 404,
}

export const ALL_GENRES = 'All genres';
export const ACTIVE_GENRE_CLASS_NAME = 'catalog__genres-item--active';

export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  SimilarFilms = '/films/:id/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/:film_id/:status',
  FilmComments = '/comments/:film_id',
  NewComment = '/comments/:film_id',
  Login = '/login',
  Logout = '/logout',
}

export const initialMovie = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};
