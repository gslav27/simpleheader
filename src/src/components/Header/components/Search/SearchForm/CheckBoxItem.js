import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import IconButtonCheckBox from '_Ui_/IconButtonCheckBox';
import FormLabel from '_Ui_/FormLabel';

import CheckBox from '_Ui_/Icons/CheckBox';
import CheckBoxBlank from '_Ui_/Icons/CheckBoxBlank';



const CheckBoxItemContiner = styled.div`
  display:  flex;
  flex-flow: row-reverse;
  flex-wrap: inherit;
  justify-content: inherit;
  align-items: center;
  margin: 3px 6px;
`;



const CheckBoxItem = ({ id, checked, label, onChange }) => (
  <CheckBoxItemContiner>
    <FormLabel
      htmlFor={id}
      checkBox
    >
      {label}
    </FormLabel>
    <IconButtonCheckBox
      id={id}
      onChange={onChange}
      checked={checked}
    >
      {
      checked
        ? <CheckBox />
        : <CheckBoxBlank />
    }
    </IconButtonCheckBox>
  </CheckBoxItemContiner>
);



CheckBoxItem.propTypes = {
  id:       PropTypes.string.isRequired,
  checked:  PropTypes.bool.isRequired,
  label:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default memo(CheckBoxItem, (prevProp, nextProp) => prevProp.checked === nextProp.checked);
