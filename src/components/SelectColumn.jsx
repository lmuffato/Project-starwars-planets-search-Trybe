import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectColumn() {
  const { setColumn, setBtn } = useContext(Context);

  const handleChange = (e) => {
    setColumn(e.target.value);
    setBtn(false);
  };

  return (
    <select
      name="Column"
      data-testid="column-filter"
      className="value-input"
      onChange={ (e) => handleChange(e) }
    >
      <option
        disabled
        selected
      >
        Selecione a Coluna
      </option>
      <option>population</option>
      <option>orbital_period</option>
      <option>diameter</option>
      <option>rotation_period</option>
      <option>surface_water</option>
    </select>
  );
}

export default SelectColumn;
