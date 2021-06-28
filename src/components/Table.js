import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';

function Table() {
  const {
    allPlanets,
    filterByName,
    setFilterByName,
    filteredArray,
    setFilteredArray,
    reset,
    setReset,
  } = useContext(planetsContext);

  useEffect(() => {
    const resultFilter = allPlanets.filter(
      (planet) => planet.name.includes(filterByName),
    );
    setFilteredArray(resultFilter);
    setReset(0);
  }, [allPlanets, setFilteredArray, filterByName, reset, setReset]);

  function handleChange({ target }) {
    return setFilterByName(target.value);
  }

  return (
    <div>
      <div>
        <form>
          <input
            data-testid="name-filter"
            type="text"
            placeholder="Digite o nome do planeta"
            onChange={ handleChange }
          />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray.map((planet) => (
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
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
