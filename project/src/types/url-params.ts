import {RouteParams} from '../const';

export  type UrlParams = {
  id: string,
}

export type RouteParamsMap = typeof RouteParams;
export type RouteParamsKeys = keyof RouteParamsMap;
export type RouteParamsValues = RouteParamsMap[RouteParamsKeys];
