import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const Menu = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viweBox}
  >
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
    <path
      d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
      fill={props.nativeColor}
    />
  </svg>
);

Menu.propTypes = IconsPropTypes;
Menu.defaultProps = IconsDefaultProps;

export default Menu;
