import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './context';

function ApiProvider({ children }) {
  const [planets, setPlanets] = useState('');

  const getApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const endPoint = await fetch(url);
    const data = await endPoint.json();
    const filteredData = data.results.filter((dat) => delete dat.residents);
    return filteredData;
  };

  useEffect(() => {
    (async function resolved() {
      const resolve = await getApi();
      setPlanets(resolve);
    }());
  }, []);

  const contextValue = {
    planets,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,

};

export default ApiProvider;
