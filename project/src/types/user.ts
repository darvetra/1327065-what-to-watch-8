import {Token} from '../services/token';

export type UserType = {
  id: number,
  email?: string,
  name: string,
  avatarUrl?: string,
  token?: Token,
}
