import { UsersState } from './../reducers/users.reducer';
import { AppState } from './../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUsersState = createFeatureSelector<AppState, UsersState>('users');

const getLoading = createSelector(getUsersState, (state: UsersState) => state.loading);
const getUsers = createSelector(getUsersState, (state: UsersState) => state.users);
const getUser = createSelector(getUsersState, (state:UsersState) => state.user);

export default {
  getLoading,
  getUsers,
  getUser
}
