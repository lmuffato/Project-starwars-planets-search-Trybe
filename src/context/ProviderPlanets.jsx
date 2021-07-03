import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import PlanetsContext from './ContextPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [planetsFound, setFound] = useState(true);
  const [availableFilters, setAvailableFilters] = useState([
    {
      value: 'population',
      name: 'População',
    },
    {
      value: 'orbital_period',
      name: 'Período orbital',
    },
    {
      value: 'diameter',
      name: 'Diâmetro',
    },
    {
      value: 'rotation_period',
      name: 'Período de rotação',
    },
    {
      value: 'surface_water',
      name: 'Águas superficiais',
    },

  ]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetchPlanets();
      setPlanets(data);
      setFilteredPlanets(data);
      setIsLoading(false);
    })();
  }, []);
  const setFilterByName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };
  const setFilterByNumeric = (column, comparison, value) => {
    if (column.length < 1) return;
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
    const newAvailableFilters = availableFilters.filter((filter) => {
      if (filter.value !== column) return true;
      setActiveFilters([...activeFilters, filter.name]);
      return false;
    });
    setAvailableFilters(newAvailableFilters);
  };
  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        setPlanets,
        filteredPlanets,
        setFilteredPlanets,
        filters,
        setFilterByName,
        setFilterByNumeric,
        planetsFound,
        setFound,
        isLoading,
        availableFilters,
        activeFilters,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};
PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default PlanetsProvider;
