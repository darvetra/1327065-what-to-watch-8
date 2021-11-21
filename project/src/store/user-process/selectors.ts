import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

import {AuthorizationStatus} from '../../const';


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getIsUserAuthorized = (state: State): boolean => state[NameSpace.user].authorizationStatus === AuthorizationStatus.Auth;
