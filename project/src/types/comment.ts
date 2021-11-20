// import {UserType} from './user';
//
// export type CommentTypeFromServer = {
//   id: number,
//   // user: UserType,
//   // user: {},
//   user: {
//     id: number,
//     name: string,
//   },
//   rating: number,
//   comment: string,
//   // date: string,
//   date: string,
// }
//
// export type CommentType = {
//   id: number,
//   // user: UserType,
//   // user: {},
//   user: {
//     id: number,
//     name: string,
//   },
//   rating: number,
//   comment: string,
//   // date: string,
//   date?: Date,
// }
//
// export type CommentsType = CommentType[]


export type Item = {
  id: number,
}

type User = Item & {
  name: string,
}

export type CommentPost = {
  rating: number,
  comment: string,
}

// export type CommentType = Item & CommentPost & {
//   user: User,
//   date: string | Date,
// }

export type CommentTypeAdaptedToServer = Item & CommentPost & {
  user: User,
  date: string,
}

export type CommentType = Omit<CommentTypeAdaptedToServer, 'date'> & {
  date: Date,
}

export type CommentsType = CommentType[]
