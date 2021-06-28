import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const fecthPlanets = async () => {
    const response = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/',
    );
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    fecthPlanets();
  }, []);

  return (
    <MainContext.Provider value={ { planets, setPlanets, filters, setFilters } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
