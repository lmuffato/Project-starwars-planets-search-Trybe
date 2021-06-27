import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import PlanetsContext from './ContextPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState([{
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  }]);
  useEffect(() => {
    (async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    })();
  }, []);
  const setFilterByName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };
  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        setPlanets,
        filters,
        setFilterByName,
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
