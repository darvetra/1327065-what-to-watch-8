import {UserType} from './user';

export type CommentType = {
  id: number,
  user: UserType,
  rating: number,
  comment: string,
  date: string,
}

export type CommentsType = CommentType[]
