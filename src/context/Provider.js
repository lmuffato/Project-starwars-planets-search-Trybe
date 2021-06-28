import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      setData(json.results);
    };
    fetchPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { data, filters, setFilters, backup, setBackup } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
