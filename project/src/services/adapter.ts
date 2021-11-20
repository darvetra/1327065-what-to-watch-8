import {MovieType, MovieTypeFromServer} from '../types/movie';
import {UserType, UserTypeFromServer} from '../types/user';
// import {CommentType, CommentTypeAdaptedToServer} from '../types/comment';

export const adaptMovieToClient = (serverMovie: MovieTypeFromServer): MovieType => ({
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

export function adaptUserToClient(user: UserTypeFromServer) {
  const adaptedUser = Object.assign(
    {},
    user,
    {
      avatarUrl: user.avatar_url,
    },
  );

  delete adaptedUser.avatar_url;

  return <UserType>adaptedUser;
}

// export function adaptCommentToClient(data: CommentTypeAdaptedToServer): CommentType {
//   return Object.assign({}, data, {
//     date: new Date(data.date),
//   });
// }
