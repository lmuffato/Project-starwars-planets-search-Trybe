import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filters() {
  const { setFilters, filters } = useContext(StarwarsContext);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const columValues = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const comparsionValues = ['maior que', 'menor que', 'igual a'];

  function buildingOptions(arrayOptions) {
    return arrayOptions.map((value) => <option key={ value }>{ value }</option>);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  }

  function addFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [numericFilter],
    });
    // setValidationFilter(false);
  }

  return (
    <>
      <div>
        <label htmlFor="name-filter">
          Nome do Planeta:
          <input
            id="name-filter"
            type="text"
            data-testid="name-filter"
            onChange={ (e) => setFilters({
              ...filters,
              filterByName: { name: e.target.value },
            }) }
          />
        </label>
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ (e) => handleChange(e) }
        >
          {buildingOptions(columValues)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (e) => handleChange(e) }
        >
          {buildingOptions(comparsionValues)}
        </select>
        <input
          type="text"
          data-testid="value-filter"
          name="value"
          onChange={ (e) => handleChange(e) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => addFilter() }
        >
          Adicionar Filtro
        </button>
      </div>
    </>
  );
}

export default Filters;
