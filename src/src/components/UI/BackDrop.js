import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBackDrop = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`;


const BackDrop = props => <StyledBackDrop {...props} />;


BackDrop.propTypes = { onClick: PropTypes.func.isRequired };

export default BackDrop;
