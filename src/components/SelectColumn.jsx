import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectColumn() {
  const { setColumn } = useContext(Context);
  return (
    <select
      name="Column"
      data-testid="column-filter"
      className="value-input"
      onChange={ (e) => setColumn(e.target.value) }
    >
      <option
        value=""
      >
        Selecione a coluna
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
