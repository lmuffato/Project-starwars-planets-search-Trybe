import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import requestAPI from '../services/requestAPI';

export default function InitialPlanets() {
  const { data, setData } = useContext(PlanetsContext);

  useEffect(() => {
    requestAPI().then((res) => {
      setData(res.results);
    });
  }, [data]);

  return (
    <>
      {data.map((planet) => (
        <tbody key={ planet.name }>
          <tr>
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
        </tbody>
      ))}
    </>
  );
}
