import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const LocalPostOffice = props => (
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
      d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z'
      fill={props.nativeColor}
    />
  </svg>
);

LocalPostOffice.propTypes = IconsPropTypes;
LocalPostOffice.defaultProps = IconsDefaultProps;

export default LocalPostOffice;
