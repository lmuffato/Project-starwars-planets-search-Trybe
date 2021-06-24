import React, { useState } from 'react';
import PropTypes from 'prop-types';
import response from '../testData';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchPlanet() {
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await fetchApi.json();
    setData(response);
    console.log(result);
    setIsLoading(false);
  }

  return (
    <PlanetsContext.Provider value={ { data, isLoading, fetchPlanet } }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
