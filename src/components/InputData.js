import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ValueInput() {
  const { value, setValue } = useContext(MyContext);

  return (
    <input
      type="text"
      value={ value }
      onChange={ (event) => setValue(event.target.value) }
      data-testid="value-filter"
    />
  );
}

export default ValueInput;
