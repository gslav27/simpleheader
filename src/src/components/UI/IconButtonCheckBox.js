import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background: none;
  transition: 0.1s background linear;
  &:focus-within {
    background: #eee;
  };
`;

const InnerWrapper = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

const Input = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  heIght: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  &:hover {
    cursor: pointer;
  };  
`;


const IconButtonCheckBox = ({ children, onChange, checked, id, ...props }) => (
  <Wrapper
    {...props}
  >
    <InnerWrapper>
      {children}
      <Input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
    </InnerWrapper>
  </Wrapper>
);


IconButtonCheckBox.propTypes = {
  id:       PropTypes.string.isRequired,
  checked:  PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default memo(IconButtonCheckBox);
