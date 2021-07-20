import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../contexts/context'

function PlanetsList() {
  const { planets, getApi } = useContext(PlanetContext);
  const [object, setObject] = useState({});


  useEffect(() => {
    getApi()
  },[])

  const allPlanets = (stars) => (
    Object.keys(stars)
    .map((star, index) => (
      <tr key={ index }>
        <td>{star.name}</td>
        <td>{star.rotation_period}</td>
        <td>{star.orbital_period}</td>
        <td>{star.diameter}</td>
        <td>{star.climate}</td>
        <td>{star.gravity}</td>
        <td>{star.terrain}</td>
        <td>{star.surface_water}</td>
        <td>{star.population}</td>
        <td>{star.films}</td>
        <td>{star.created}</td>
        <td>{star.edited}</td>
        <td>{star.url}</td>
      </tr>
    ))
  );

  const ObjectKeys = (array) => {
      return Object.keys(array).map((item, index) => (
      <th key={index}>{item}</th>
      ))
  }

  return (
    <table>
      <thead>
        <tr>
          {planets && ObjectKeys(planets[0])}
        </tr>
        <tbody>
        </tbody>
      </thead>
    </table>
  );
}

export default PlanetsList;
