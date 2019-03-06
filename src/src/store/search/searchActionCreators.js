import * as types from './searchActionTypes';

export const setSearchText = value => ({
  type: types.SEARCH_TEXT,
  payload: value,
});

export const setAuthorName = value => ({
  type: types.AUTHOR_NAME,
  payload: value,
});
