import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const values = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Column() {
  const { setColumn } = useContext(MyContext);
  return (
    <select
      name="Column"
      data-testid="column-filter"
      id="column-filter"
      onChange={ (e) => setColumn(e.target.value) }
    >
      {values.map((value, index) => (
        <option key={ index } id={ value }>{value}</option>
      ))}
    </select>
  );
}

export default Column;
