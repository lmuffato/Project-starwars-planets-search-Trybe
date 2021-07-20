import React, { useState } from 'react';
import PlanetContext from './context';

function ApiProvider({ children }) {

  const getApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const endPoint = await fetch(url);
    const data = await endPoint.json();
    const filteredData = data.results.filter((dat) => delete dat.residents);
    setPlanets(filteredData);
  };

  const [planets, setPlanets] = useState('');
  const contextValue = {
    planets,
    getApi,

  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

export default ApiProvider;
