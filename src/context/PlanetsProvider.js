import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filterOptions, setFilterOptions] = useState({
    column: '',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const fetchAPI = fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await fetchAPI;
      const { results } = await response.json();
      setData(results);
    };
    fetchPlanets();
  }, []);

  return (
    <planetsContext.Provider
      value={ { data, filters, setFilters, filterOptions, setFilterOptions } }
    >
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
