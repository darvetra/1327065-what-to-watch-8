export const SHOW_MOVIE_CARDS = 8;

export const MAX_SIMILAR_MOVIES = 4;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export const RouteParams = {
  ID: ': id',
  FILM_ID: ': film_id',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genres {
  All = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/: id',
  SimilarFilms = '/films/: id/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/: film_id/: status',
  FilmComments = ' /comments/: film_id',
  NewComment = '/comments/: film_id',
  Login = '/login',
  Logout = '/logout',
}
