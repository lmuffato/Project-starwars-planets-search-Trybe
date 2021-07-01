import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filteredByName: { name: '' } });
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
  };

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
