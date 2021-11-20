// import {UserType} from './user';

export type CommentType = {
  id: number,
  // user: UserType,
  // user: {},
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

export type CommentsType = CommentType[]
