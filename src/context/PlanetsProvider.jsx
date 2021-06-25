import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilter] = useState({ filterByName: { name: '' } });

  async function fetchPlanets() {
    setIsLoading(true);
    const planets = await getPlanets();
    const noResidents = planets.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(noResidents);
    setIsLoading(false);
  }

  function setNameFilter(name) {
    setFilter({
      filterByName: {
        name,
      },
    });
  }

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        isLoading,
        fetchPlanets,
        filters,
        setNameFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
