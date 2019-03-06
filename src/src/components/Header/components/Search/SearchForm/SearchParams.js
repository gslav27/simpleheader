import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { searchFilterPropTypes } from '_Utils_/types/interfaces';
import FormLabel from '_Ui_/FormLabel';
import ArrowDropDown from '_Ui_/Icons/ArrowDropDown';
import CheckBoxItem from './CheckBoxItem';

import * as types from '../../../../../store/search/searchActionTypes';
import { setAuthorName } from '../../../../../store/search/searchActionCreators';


const Wrapper = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
  ${({ theme }) => theme.widthXsMediaMixin(`
    max-width: calc(100vw - 20px);
    top: 50px;
    left: 10px;
  `)};
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  flex: 100%;
  width: 313px;
  height: 37px;
  border: 1px solid #c4ced5;
  border-radius: 2px;
  margin: 16px 19px; 
  padding: 9px;
  &::placeholder {
    font-size: 12px;
    color: #c0c0c0;
  };
`;

const BottomFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.widthXsMediaMixin(`
    flex-direction: column;
    align-items: flex-start;
  `)};
`;

const Select = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 141px;
  height: 37px;
  border-radius: 2px;
  background-color: #f2f2f2;
  border: 1px solid #dadada;
  padding-left: 13px;
`;

const Text = styled.span`
  font-size: 13px;
  color: #444444;
  font-weight: 400;
`;

const SelectsInput = styled.input`
  border: none;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledArrowDropDown = styled(ArrowDropDown)`
  width: 18px;
  height: 18px;
`;



const SearchParams = ({
  dispatch,
  firstLineCheckBox,
  bottomCheckBoxes,
  searchFiltersSortList,
  ...otherProps
}) => (
  <Wrapper>
    <FilterGroup>
      <CheckBoxItem
        id={`${firstLineCheckBox.key}Toggler`}
        checked={otherProps[firstLineCheckBox.key]}
        label={firstLineCheckBox.label}
        onChange={() => dispatch({ type: types.TOGGLE + types[firstLineCheckBox.key.toUpperCase()] })}
      />
      <Input
        type='text'
        placeholder='Автор'
        value={otherProps.authorName}
        onChange={e => dispatch(setAuthorName(e.target.value))}
      />
    </FilterGroup>
    <FilterGroup>
      <FormLabel
        htmlFor='sortBy'
        dark
      >
        Сортировать по:
      </FormLabel>
      <Select>
        <SelectsInput
          id='sortBy'
          onClick={() => console.log('OPEN SORT_BY')}
          type='button'
        />
        <Text>
          {otherProps.sortBy}
        </Text>
        <StyledArrowDropDown nativeColor='#000' />
      </Select>
    </FilterGroup>
    <BottomFilters>
      {
        bottomCheckBoxes.map(({ label, key }) => (
          <CheckBoxItem
            key={key}
            id={`${key}Toggler`}
            checked={otherProps[key]}
            label={label}
            onChange={() => dispatch({ type: types.TOGGLE + types[key.toUpperCase()] })}
          />
        ))
      }
    </BottomFilters>
  </Wrapper>
);


SearchParams.propTypes = {
  dispatch:                 PropTypes.func.isRequired,
  firstLineCheckBox:        PropTypes.shape(searchFilterPropTypes).isRequired,
  bottomCheckBoxes:         PropTypes.arrayOf(PropTypes.shape(searchFilterPropTypes)).isRequired,
  searchFiltersSortList:    PropTypes.arrayOf(PropTypes.shape(searchFilterPropTypes)).isRequired,
};

export default memo(SearchParams);
