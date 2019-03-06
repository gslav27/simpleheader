import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  z-index: 1;
  margin: ${({ checkBox }) => (checkBox ? '0px 0px 0px -6px' : '0px 21px')};
  font-size: 12px;
  color: ${({ dark }) => (dark ? '#000' : '#212121')};
`;

const FormLabel = props => <Label {...props} />;


FormLabel.propTypes = {
  checkBox: PropTypes.bool,
  dark: PropTypes.bool,
};

FormLabel.defaultProps = {
  checkBox: false,
  dark: false,
};

export default FormLabel;
