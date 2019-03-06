import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const AddCircle = props => (
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
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'
      fill={props.nativeColor}
    />
  </svg>
);

AddCircle.propTypes = IconsPropTypes;
AddCircle.defaultProps = IconsDefaultProps;

export default AddCircle;
