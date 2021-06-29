import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getApiPlanets() {
      const { results } = await getAPI();
      setPlanets(results);
    }

    getApiPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
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
