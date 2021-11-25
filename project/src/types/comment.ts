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

export type CommentTypeAdaptedToServer = Item & CommentPost & {
  user: User,
  date: Date,
}

export type CommentType = Omit<CommentTypeAdaptedToServer, 'date'> & {
  date: Date,
}

export type CommentsType = CommentType[]
