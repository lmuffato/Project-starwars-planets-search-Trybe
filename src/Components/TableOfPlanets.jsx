import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

const TablePlanets = () => {
  const {
    data,
    changeFilterName,
    addNumericFilter,
    deleteNumericFilter,
    filters,
  } = useContext(myContext);

  const [columnFilter, changeColumnFilter] = useState('population');
  const [comparisonFilter, changeComparisonFilter] = useState('maior que');
  const [valueFilter, changeValueFilter] = useState(0);
  const [availableFilters, changeAvailableFilters] = useState([
    'population', 'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ]);

  const submitFilter = () => {
    addNumericFilter({
      column: columnFilter,
      comparison: comparisonFilter,
      value: parseFloat(valueFilter),
    });
    availableFilters.forEach((filter, index) => {
      if (filter === columnFilter) {
        const list = availableFilters;
        list.splice(index, 1);
        changeAvailableFilters(list);
      }
    });
    changeColumnFilter(availableFilters[0]);
  };

  const deleteAPliedFilter = (column) => {
    changeAvailableFilters([
      ...availableFilters,
      column,
    ]);
    deleteNumericFilter(column);
  };

  return (
    <div>
      <form>
        <h2>Filters</h2>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => changeFilterName(value) }
        />
        <select
          value={ availableFilters[0] }
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => changeColumnFilter(value) }
        >
          { availableFilters.map((filter) => (
            <option
              key={ filter }
              value={ filter }
            >
              {filter}
            </option>
          )) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => changeComparisonFilter(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => changeValueFilter(value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ submitFilter }
        >
          Filter
        </button>
      </form>
      { filters.filterByNumericValues.length > 0
        && (
          <div>
            {filters.filterByNumericValues.map((filter) => (
              <div
                key={ filter.column }
                data-testid="filter"
              >
                <button
                  type="button"
                  onClick={ () => deleteAPliedFilter(filter.column) }
                >
                  X
                </button>
                <spam>
                  { filter.column }
                </spam>
              </div>))}
          </div>
        )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>
                {planet.films.map((film, index) => (
                  <a key={ film } href={ film }>
                    {`Film ${index + 1}`}
                  </a>
                ))}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td><a href={ planet.url }>Link</a></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default TablePlanets;