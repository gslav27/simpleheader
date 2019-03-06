import { oneOfType, number, string, objectOf, bool } from 'prop-types';

export const IconsPropTypes = {
  style: objectOf(oneOfType([string, number])),
  className: string,
  nativeColor: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  viewBox: string,
};

export const searchFilterPropTypes = {
  label: string,
  key: string,
  separate: bool,
};
