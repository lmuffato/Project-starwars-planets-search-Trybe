import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import MyContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = { data, setData };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((obj) => obj.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: node,
}.isRequired;

export default MyProvider;
