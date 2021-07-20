import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../contexts/context';

function PlanetsList() {
  const { planets, getApi } = useContext(PlanetContext);
  useEffect(() => {
    getApi();
  }, []);

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

  const ObjectKeys = (array) => Object.keys(array).map((item, index) => (
    <th key={ index }>{item}</th>
  ));
  console.log(allPlanets('bruno'));
  return (
    <table>
      <thead>
        <tr>
          {planets && ObjectKeys(planets[0])}
        </tr>
        <tbody />

      </thead>
    </table>
  );
}

PlanetsList.defaultProps = {
  getApi: PropTypes.func,
  planets: PropTypes.string,
};

export default PlanetsList;
