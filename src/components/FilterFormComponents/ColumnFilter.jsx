import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function ColumnFilter() {
  const { handleChangeNumericValues } = useContext(MainContext);

  return (
    <label htmlFor="column-filter">
      <select
        id="column-filter"
        data-testid="column-filter"
        onChange={ (event) => handleChangeNumericValues(event, 'column') }
      >
        <option>selecione</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
    </label>
  );
}
