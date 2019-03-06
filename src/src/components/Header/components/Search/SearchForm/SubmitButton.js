import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  min-width: 70px;
  height: 40px;
  border-radius: 2px;
  border: none;
  background-color: #ffc120;
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
`;


const SubmitButton = props => (
  <Button type='submit'>
    Найты
  </Button>
);


SubmitButton.propTypes = {};

export default SubmitButton;
