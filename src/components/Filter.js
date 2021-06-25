import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { filters, setFilters } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;

  const handleChange = (event) => {
    setFilters({ ...filters, filterByName: { name: event.target.value } });
  };

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
  };

  const handleChangeComparison = (event) => {
    setComparison(event.target.value);
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const filterNumbers = {
      column,
      comparison,
      value,
    };

    if (!filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [filterNumbers],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: filterByNumericValues.concat(filterNumbers),
      });
    }
  };

  const activeFilters = () => (Object.keys(filters).includes('filterByName') ? (
    <div>
      <span>Active Name Filter</span>
      <p>{ `filters: { filterByName: { ${filters.filterByName.name} } }`}</p>
    </div>
  ) : <p>Nenhum filtro ativo!</p>
  );

  const activeNumberFilters = () => (filters.filterByNumericValues.length >= 1 ? (
    <div>
      <span>Active Number Filters</span>
      { filters.filterByNumericValues
        .map((filter) => (
          <p key={ filter.column }>
            { ` { filterByNumericValues: { 
              ${filter.column},
              ${filter.comparison},
              ${filter.value} } }`}
          </p>)) }
    </div>
  ) : <p>Nenhum filtro ativo!</p>
  );

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />

      <div>
        <select data-testid="column-filter" onChange={ handleChangeColumn }>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select data-testid="comparison-filter" onChange={ handleChangeComparison }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input type="text" data-testid="value-filter" onChange={ handleChangeValue } />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar filtro
        </button>
      </div>

      { activeFilters() }
      { filters.filterByNumericValues ? activeNumberFilters() : null }

    </div>
  );
}

export default Filter;
