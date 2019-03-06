import * as types from './searchActionTypes';


// Mock initial state
export const initialState = {
  searchText: '',
  my: false,
  sortBy: 'date',
  participant: false,
  title: true,
  exact: false,
  authorName: '',
};


export default function reducer(state, { type, payload }) {
  switch (type) {
    // text inputs
    case types.SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };
    case types.AUTHOR_NAME:
      return {
        ...state,
        authorName: payload,
      };

    // checkBoxes
    case types.TOGGLE + types.MY:
      return {
        ...state,
        my: !state.my,
      };
    case types.TOGGLE + types.PARTICIPANT:
      return {
        ...state,
        participant: !state.participant,
      };
    case types.TOGGLE + types.TITLE:
      return {
        ...state,
        title: !state.title,
      };
    case types.TOGGLE + types.EXACT:
      return {
        ...state,
        exact: !state.exact,
      };

    // select lists
    case types.SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };

    default:
      return state;
  }
}
