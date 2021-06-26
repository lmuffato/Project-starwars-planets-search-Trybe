import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import AppContext from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  async function fetchData() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    setData(planets.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    filters,
    setFilters,
    data,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropType.arrayOf(PropType.element).isRequired,
};

export default Provider;
