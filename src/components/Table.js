import React, { useContext } from 'react';

import TableHead from './TableHead';
import planetsContext from '../context/PlanetsContext';
import comparisonSwitch from '../util/switch';
import '../App.css';

function Table() {
  const {
    data, name, filterByNumericValue, setFilterByNumericValue, column, value,
    comparison } = useContext(planetsContext);

  let planets = data;
  if (name !== '') planets = data.filter((e) => e.name.includes(name));
  if (filterByNumericValue.length > 0) {
    planets = data.filter((planet) => (
      comparisonSwitch(planet, column, comparison, value)
    ));
  }

  const removeFilter = (col) => {
    filterByNumericValue.forEach((filter) => {
      if (col === filter.column) {
        setFilterByNumericValue(filterByNumericValue.filter((e) => e.column !== col));
      }
    });
  };
  const allFilters = () => (
    <div className={ filterByNumericValue.length > 0 ? 'show-filters' : 'hide-filters' }>
      <h2>Filtros aplicados</h2>
      {
        filterByNumericValue.map((e) => (
          <p key={ e.column } data-testid="filter">
            {`Filtro: ${e.column} ${e.comparison} ${e.value}`}
            <button
              type="button"
              onClick={ () => removeFilter(e.column) }
            >
              X
            </button>
          </p>
        ))
      }
    </div>
  );

  return (
    <div>
      {allFilters()}
      <table>
        {TableHead()}
        <tbody>
          {
            planets.map((e) => (
              <tr key={ e.name }>
                <td>{e.name}</td>
                <td>{e.rotation_period}</td>
                <td>{e.orbital_period}</td>
                <td>{e.diameter}</td>
                <td>{e.climate}</td>
                <td>{e.gravity}</td>
                <td>{e.terrain}</td>
                <td>{e.surface_water}</td>
                <td>{e.population}</td>
                <td>
                  <ul>
                    {e.films.map((film, index) => (
                      <li key={ index }>{film}</li>))}
                  </ul>
                </td>
                <td>{e.created}</td>
                <td>{e.edited}</td>
                <td>{e.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
