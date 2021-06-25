import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApiStarWars from '../services/requestApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  async function fetchPlanetsFromApi() {
    setIsFetching(true);
    await requestApiStarWars()
      .then(
        (response) => setData(response.results),
        (error) => console.log(error.message),
      )
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    fetchPlanetsFromApi();
  }, []);

  const contextStarWars = {
    isFetching,
    data,
  };

  return (
    <StarWarsContext.Provider
      value={ contextStarWars }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
