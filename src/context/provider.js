import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './mycontext';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const [backup, setBackup] = useState([]);
  const [planetName, setPlanetName] = useState('');
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const date = await response.json();
      setData(date.results);
    };
    fetchPlanets();
  }, []);
  return (
    <myContext.Provider
      value={ { backup,
        data,
        setPlanetName,
        planetName,
        setBackup } }
    >
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
