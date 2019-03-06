import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const CheckBoxBlank = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viweBox}
    focusable={false}
    aria-hidden
    role='presentation'
  >
    <path
      d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
      fill={props.nativeColor}
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
);

CheckBoxBlank.propTypes = IconsPropTypes;
CheckBoxBlank.defaultProps = {
  ...IconsDefaultProps,
  nativeColor: '#c4ced5',
};

export default CheckBoxBlank;
