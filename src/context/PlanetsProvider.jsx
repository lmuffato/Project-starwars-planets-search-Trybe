import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const filterObject = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilter] = useState(filterObject);
  const [canFilter, setCanFilter] = useState(false);

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
      ...filters,
      filterByName: {
        name,
      },
    });
  }

  function setNumericValuesFilter(column, comparison, value) {
    setFilter({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
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
        setNumericValuesFilter,
        canFilter,
        setCanFilter,
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
