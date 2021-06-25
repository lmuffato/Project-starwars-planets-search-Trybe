import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../../contexts/PlanetsContext';

function Filter() {
  const {
    filterByText,
    tableHeads,
  } = useContext(PlanetsContext);
  const [columnsToSelect, setColumnsToSelect] = useState([]);

  useEffect(() => {
    function getColumnsToSelect() {
      const options = [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ];
      console.log('executei');
      const heads = tableHeads.filter((head) => options.includes(head));
      return heads;
    }
    const heads = getColumnsToSelect();
    setColumnsToSelect(heads);
  }, [tableHeads]);

  return (
    <>
      <input
        type="text"
        onChange={ ({ target: { value } }) => filterByText(value) }
        data-testid="name-filter"
      />
      <select data-testid="column-filter">
        { columnsToSelect.length > 0 && columnsToSelect.map((head) => (
          <option value={ head } key={ head }>{head}</option>
        )) }
      </select>
    </>
  );
}

export default Filter;
