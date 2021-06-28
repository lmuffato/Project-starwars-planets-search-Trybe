import React, { useContext } from 'react';
import Context from '../context/Context';

function ValueInput() {
  const { value, setValue, setBtn } = useContext(Context);

  const handleChange = (e) => {
    setValue(e.target.value);
    setBtn(false);
  };

  return (
    <input
      type="text"
      value={ value }
      onChange={ (e) => handleChange(e) }
      className="value-input"
      id="value-filter"
      data-testid="value-filter"
      placeholder="Defina um Valor"
    />
  );
}

export default ValueInput;
