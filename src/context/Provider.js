import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

const Provider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filters, setFilters] = useState({ filterByName: {
    name: '',
  },
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const countriesObject = await request.json();
      const { results } = countriesObject;
      setCountries(results);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const newList = countries.filter((country) => (
      country.name.includes(filters.filterByName.name)));
    setFilteredCountries(newList);
    console.log('newList', newList);
    console.log('countries', countries);
  }, [filters, countries]);

  const context = {
    filteredCountries,
    setFilters,
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
