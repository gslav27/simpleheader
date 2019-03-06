import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Search from '_Ui_/Icons/Search';
import Close from '_Ui_/Icons/Close';
import IconButton from '_Ui_/IconButton';

import { setSearchText } from '../../../../../store/search/searchActionCreators';

const InputContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 40px;
  margin-right: -2px;
  background-color: #fff;
  border-radius: 2px;
  width: ${({ expandForm }) => (expandForm ? '100%' : '0px')};
  overflow: hidden;
  transition: 200ms width linear;
`;

const Input = styled.input`
  flex: 100%;
  border: none;
  font-size: 13px;
  &:focus {
    outline: none;
  };
`;


const SearchTextInput = ({
  searchText,
  dispatch,
  expandForm,
  onFocus,
}) => {
  const searchTextInputRef = useRef(null);

  return (
    <InputContainer expandForm={expandForm}>
      <IconButton
        type='button'
        onClick={() => { searchTextInputRef.current.focus(); }}
      >
        <Search nativeColor='#c1c1c1' />
      </IconButton>
      <Input
        ref={searchTextInputRef}
        type='text'
        value={searchText}
        onChange={e => dispatch(setSearchText(e.target.value))}
        // onFocus={() => setInputIsFocused(true)}
        onFocus={onFocus}
      />
      {
        searchText && (
          <IconButton
            type='button'
            onClick={() => dispatch(setSearchText(''))}
          >
            <Close nativeColor='#444f62' />
          </IconButton>
        )
      }
    </InputContainer>
  );
};

SearchTextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  expandForm: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default SearchTextInput;
