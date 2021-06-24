import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((dataResults) => dataResults.json());
      const resultsMinusResidents = results.filter((planet) => delete planet.residents);

      setData(resultsMinusResidents);
      setLoading(false);
    };
    getPlanets();
  }, []);

  return (
    <StarwarsContext.Provider value={ { data, loading } }>
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarwarsProvider;
