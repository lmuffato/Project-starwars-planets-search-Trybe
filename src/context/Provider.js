import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

const Provider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const countriesObject = await request.json();
      const { results } = countriesObject;
      setCountries(results);
      console.log(results);
    };
    fetchCountries();
  }, []);

  const context = {
    countries,
  };

  return (
    <CountriesContext.Provider value={ context }>
      { children }
    </CountriesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
