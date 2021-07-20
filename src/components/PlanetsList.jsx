import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../contexts/context';

function PlanetsList(props) {
  const { planets, getApi } = useContext(PlanetContext);
  const [clicked, setClicked] = useState(false);
  console.log(props);
  const { state, itens, conditions, number } = props;
  useEffect(() => {
    getApi();
  }, [getApi]);

  const onClick = () => () => setClicked(true);

  const allPlanets = (stars) => (
    stars
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

  const filter = (item, condition, numbers, filtered) => {
    const toNumber = Number(numbers);
    if (filtered && item !== '' && condition === 'maior que' && toNumber !== 0) {
      return (
        planets
          .filter((i) => i[item] > toNumber)
      );
    } if (filtered && item !== '' && condition === 'menor que' && toNumber !== 0) {
      return (
        planets
          .filter((i) => i[item] < toNumber)
      );
    } if (filtered && item !== '' && condition === 'igual a' && toNumber !== 0) {
      return (
        planets
          .filter((i) => i[item] === number)
      );
    }
  };

  const searchByName = (name) => {
    if (planets) {
      return (
        (planets
          .filter((i) => i.name.includes(name))
        )
      );
    }
  };

  const ObjectKeys = (array) => Object.keys(array).map((item, index) => (
    <th key={ index }>{item}</th>
  ));
  return (
    <>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick() }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            {planets && ObjectKeys(planets[0])}
          </tr>
          <tbody>
            {planets && !clicked && allPlanets(searchByName(state))}
            {clicked && allPlanets(filter(itens, conditions, number, clicked))}
          </tbody>
        </thead>
      </table>
    </>
  );
}

PlanetsList.defaultProp = {
  getApi: PropTypes.func,
  planets: PropTypes.string,
};

PlanetsList.propTypes = {
  state: PropTypes.string.isRequired,
  itens: PropTypes.string.isRequired,
  conditions: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default PlanetsList;
