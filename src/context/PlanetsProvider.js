import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const filterPlanet = data.filter((planet) => planet.name
      .includes(filters.filterByName.name));
    setFilteredPlanets(filterPlanet);
  }, [data, filters]);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    filteredPlanets,
  };

  return (
    <PlanetsContext.Provider
      value={ context }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: object,
}.isRequired;

export default PlanetsProvider;
