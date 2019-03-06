import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackDrop from '_Ui_/BackDrop';

import SubmitButton from './SubmitButton';



const Form = styled.form`
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  z-index: 1;
  right: 48px;
  width: calc(100% - 48px);
  ${({ theme }) => theme.widthXsMediaMixin(`
    position: fixed;
    left: 0;
    width: 100%;
    padding: 5px;
  `)};
`;


const SearchFormLayout = ({
  onSubmit,
  onClose,
  inputIsFocused,
  searchTextInput,
  searchParams,
}) => (
  <Form onSubmit={onSubmit}>
    {searchTextInput}
    <SubmitButton />
    {inputIsFocused && searchParams}
    <BackDrop onClick={onClose} />
  </Form>
);


SearchFormLayout.propTypes = {
  onSubmit:         PropTypes.func.isRequired,
  onClose:          PropTypes.func.isRequired,
  inputIsFocused:   PropTypes.bool.isRequired,
  searchTextInput:  PropTypes.node.isRequired,
  searchParams:     PropTypes.node.isRequired,
};

export default SearchFormLayout;
