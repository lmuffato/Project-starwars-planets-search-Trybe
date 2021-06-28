import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/ContextPlanets';
import TableHead from './TableHead';

function Table() {
  const {
    planets,
    filteredPlanets,
    setFilteredPlanets,
    setFound,
    filters: { filterByName: { name } },
  } = useContext(PlanetsContext);
  useEffect(() => {
    if (name.length < 1) return setFilteredPlanets(planets);
    const filterPlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(name));
    if (filterPlanets.length < 1) {
      setFilteredPlanets([]);
      setFound(false);
    } else setFound(true);
    setFilteredPlanets(filterPlanets);
  }, [name]);

  return (
    <table>
      <TableHead />
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
    </table>
  );
}

export default Table;
