import React, { useState } from 'react';
import { element } from 'prop-types';
import getPlanets from '../services/api';
import PlanetContext from './PlanetsContext';

function PlanetProvider({ children }) {
  const filtersInitialState = {
    filterByName: { name: '' },
    filterByNumericValue: [],
  };

  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filtersInitialState);

  async function fetchPlanets() {
    setIsLoading(true);
    const { results } = await getPlanets();
    setPlanets(results);
    setData(results);
    setIsLoading(false);
  }

  const value = {
    fetchPlanets,
    isLoading,
    data,
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  return (
    <PlanetContext.Provider value={ { ...value } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: element.isRequired,
};

export default PlanetProvider;
