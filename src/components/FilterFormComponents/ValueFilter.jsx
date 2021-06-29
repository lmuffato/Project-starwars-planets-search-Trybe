import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function ValueFilter() {
  const { handleChangeNumericValues } = useContext(MainContext);

  return (
    <label htmlFor="value-filter">
      <input
        type="number"
        id="value-filter"
        data-testid="value-filter"
        onChange={ (event) => handleChangeNumericValues(event, 'value') }
      />
    </label>
  );
}
