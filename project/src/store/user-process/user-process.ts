import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus, initialUser} from '../../const';
import {UserProcess} from '../../types/state';

import {authUser, requireAuthorization, requireLogout} from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(authUser, (state, action) => {
      state.user = action.payload;
    });
});

export {userProcess};
