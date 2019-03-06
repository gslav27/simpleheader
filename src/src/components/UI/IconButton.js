import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: none;
  padding: 0;
  border-radius: 3px;
  border: none;
  &:hover {
    cursor: pointer;
  };
`;


const IconButton = ({ children, ...props }) => (
  <StyledButton
    {...props}
  >
    {children}
  </StyledButton>
);


IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default memo(IconButton);
