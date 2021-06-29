import React, { useContext } from 'react';
import Context from '../context/Context';

const values = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SelectColumn() {
  const { setColumn } = useContext(Context);

  return (
    <select
      name="Column"
      data-testid="column-filter"
      id="column-filter"
      className="value-input"
      onChange={ (e) => setColumn(e.target.value) }
    >
      {values.map((value, index) => (
        <option key={ index } id={ value }>{value}</option>
      ))}
    </select>
  );
}

export default SelectColumn;
