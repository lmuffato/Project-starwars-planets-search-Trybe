import React, { useEffect, useState } from 'react';

import services from '../services/api';

const Table = () => {
  const [planets, setPlanets] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchPlanets = await services.fetchPlanets();
      setPlanets(fetchPlanets);
    })();
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      const getKeys = Object.keys(planets[0]);
      setKeys(getKeys);
    }
  }, [planets]);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => key !== 'residents' && <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            {/* <td>{planet.name}</td>
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
            <td>{planet.url}</td> */}

            {Object.keys(planet)
              .map((key) => key !== 'residents'
              && <td key={ planet[key] }>{planet[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>);
};

export default Table;
