import React, { useContext } from 'react';
import Context from '../context/Context';

function ValueInput() {
  const { value, setValue } = useContext(Context);

  return (
    <input
      type="text"
      value={ value }
      onChange={ (e) => setValue(e.target.value) }
      className="value-input"
      data-testid="value-filter"
    />
  );
}

export default ValueInput;
