import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [getNames, setGetNames] = useState(
    { filters: { filterByName: { name: '' } } },
  );

  useEffect(() => {
    const getApiPlanets = async () => {
      const { results } = await getAPI();
      setPlanets(results);
    };

    getApiPlanets();
  }, []);

  const getByName = (event) => {
    const { value } = event.target;
    setGetNames({ filters: { filterByName: { name: value } } });
  };

  const filterByName = () => {
    const { filters: { filterByName: { name } } } = getNames;
    if (name) {
      const planetNames = planets.filter((planet) => planet.name.includes(name));
      return planetNames;
    }
    return planets;
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        getNames,
        getByName,
        filterByName,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
