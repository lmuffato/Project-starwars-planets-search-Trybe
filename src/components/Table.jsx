/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/ContextPlanets';
import TableHead from './TableHead';
import Loading from './Loading';

function Table() {
  const {
    planets,
    planetsFound,
    isLoading,
    filteredPlanets,
    setFilteredPlanets,
    setFound,
    activeFilters,
    filters: { filterByName: { name }, filterByNumericValues },
  } = useContext(PlanetsContext);
  useEffect(() => {
    if (name.length < 1) {
      setFilteredPlanets(planets);
      setFound(true);
    }
    const filterPlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(name));
    if (filterPlanets.length < 1) {
      setFilteredPlanets([]);
      setFound(false);
    } else setFound(true);
    setFilteredPlanets(filterPlanets);
  }, [name]);

  useEffect(() => {
    let filterPlanets = planets;
    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        filterPlanets = filteredPlanets
          .filter((planet) => planet[filter.column] > Number(filter.value));
      } else if (filter.comparison === 'menor que') {
        filterPlanets = filteredPlanets
          .filter((planet) => planet[filter.column] < Number(filter.value));
      } else if (filter.comparison === 'igual a') {
        filterPlanets = filteredPlanets
          .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
      }
    });
    if (filterPlanets.length < 1) {
      setFilteredPlanets([]);
      setFound(false);
    } else setFound(true);
    setFilteredPlanets(filterPlanets);
  }, [activeFilters, planets, setFilteredPlanets, setFound]);

  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
  return (
    <table>
      <TableHead />
      {planetsFound ? (
        <tbody>
          {filteredPlanets.map((planet) => (
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
                <ul>
                  {planet.films.map((film) => (
                    <li key={ `${film}${Math.random()}` }>{film}</li> // Random para não dar o mesmo nome de key
                  ))}
                </ul>
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      ) : (<div>Nenhum planeta encontrado</div>)}
    </table>
  );
}

export default Table;
