import React, { useContext } from 'react';

import TableHead from './TableHead';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data, name, btnFilter, setFilters, column, comparison, value,
  } = useContext(planetsContext);

  let planets = '';
  if (name === '' && btnFilter === false) planets = data;
  if (name !== '') planets = data.filter((e) => e.name.includes(name));
  if (btnFilter && comparison === 'maior que') {
    planets = data.filter((e) => e[column] > Number(value));
    // const thisFilter = { column, comparison, value };
    // setFilterByNumericValues(thisFilter);
  }
  if (btnFilter && comparison === 'menor que') {
    planets = data.filter((e) => e[column] < Number(value));
    // const thisFilter = { column, comparison, value };
    // setFilterByNumericValues(thisFilter);
  }
  if (btnFilter && comparison === 'igual a') {
    planets = data.filter((e) => e[column] === value);
    // const thisFilter = { column, comparison, value };
    // setFilterByNumericValues(thisFilter);
  }
  const allFilters = () => (
    <p>Filtros</p>
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
