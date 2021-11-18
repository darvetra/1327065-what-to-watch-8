import {Token} from '../services/token';

export type UserType = {
  id: number,
  email?: string,
  name: string,
  avatarUrl?: string,
  token?: Token,
}

export type UserTypeFromServer = {
  id: number,
  email: string,
  name: string,
  'avatar_url'?: string,
  token: Token,
}
