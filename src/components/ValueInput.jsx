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
      id="value-filter"
      data-testid="value-filter"
      placeholder="Defina um Valor"
    />
  );
}

export default ValueInput;
