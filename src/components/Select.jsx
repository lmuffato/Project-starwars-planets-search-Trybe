import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Select({ ...props }) {
  return (
    <Dropdown
      { ...props }
    />
  );
}

export default Select;
