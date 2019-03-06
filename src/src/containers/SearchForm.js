import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { searchParamsCheckBoxes, searchFiltersSortList } from '_Utils_/constants/constants';

import reducer, { initialState } from '../store/search/searchReducer';

import SearchTextInput from '../components/Header/components/Search/SearchForm/SearchTextInput';
import SearchParams from '../components/Header/components/Search/SearchForm/SearchParams';
import SearchFormLayout from '../components/Header/components/Search/SearchForm/SearchFormLayout';


// app search filters filtered by groups
const searchParamsBottomCheckBoxes = [];
let searchParamsTopCheckBox = {};
searchParamsCheckBoxes.forEach((filter) => {
  filter.top
    ? searchParamsTopCheckBox = filter
    : searchParamsBottomCheckBoxes.push(filter);
});


const SearchInput = ({ onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [expandForm, setExpandForm] = useState(false);

  useEffect(() => {
    setExpandForm(true);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT, data: ', state);
  }

  function handleClose() {
    setExpandForm(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }

  return (
    <SearchFormLayout
      onSubmit={handleSubmit}
      onClose={handleClose}
      searchTextInput={(
        <SearchTextInput
          searchText={state.searchText}
          dispatch={dispatch}
          expandForm={expandForm}
          onFocus={() => setInputIsFocused(true)}
        />
      )}
      searchParams={(
        <SearchParams
          dispatch={dispatch}
          firstLineCheckBox={searchParamsTopCheckBox}
          bottomCheckBoxes={searchParamsBottomCheckBoxes}
          searchFiltersSortList={searchFiltersSortList}
          // pass state values with 'searchText' excluded
          {...Object.keys(state).reduce((acc, key) => {
            if (key === 'searchText') return acc;
            acc[key] = state[key];
            return acc;
          }, {})}
        />
      )}
      inputIsFocused={inputIsFocused}
    />
  );
};

SearchInput.propTypes = { onClose:PropTypes.func.isRequired };

export default SearchInput;
