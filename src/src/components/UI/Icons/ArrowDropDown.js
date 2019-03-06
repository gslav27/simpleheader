import React from 'react';
// import PropTypes from 'prop-types';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const ArrowDropDown = ({ nativeColor, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viweBox}
    focusable={false}
    aria-hidden
    role='presentation'
    {...props}
  >
    <path
      d='M7 10l5 5 5-5z'
      fill={nativeColor}
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
);

ArrowDropDown.propTypes = IconsPropTypes;
ArrowDropDown.defaultProps = IconsDefaultProps;

export default ArrowDropDown;
