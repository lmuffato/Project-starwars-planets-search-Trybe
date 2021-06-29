import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function ComparisonFilter() {
  const { handleChangeNumericValues } = useContext(MainContext);

  return (
    <label htmlFor="comparison-filter">
      <select
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (event) => handleChangeNumericValues(event, 'comparison') }
      >
        <option>selecione</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </label>
  );
}
