import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['one', 'two', 'three'];
const defaultOption = options[0];

function Select() {
  return (
    <Dropdown
      options={ options }
      value={ defaultOption }
      placeholder="Selecione uma opção de filtro"
    />
  );
}

export default Select;
