import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ filters: {
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ] } });
  const [usefulData, setUsefulData] = useState(data);

  const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsApi = () => fetch(PLANETS_API)
    .then((response) => response.json());

  const handleSearchClick = () => {
    const { column, comparison, value } = search.filters.filterByNumericValues[0];
    const dataFilter = data.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (planet[column] > parseInt(value, 10));
      case 'menor que':
        return (planet[column] < parseInt(value, 10));
      case 'igual a':
        return (planet[column] === value);
      default:
        return true;
      }
    });
    setUsefulData(dataFilter);
  };

  useEffect(() => {
    const retrievePlanets = async () => {
      const { results } = await getPlanetsApi();
      setData(results);
      setUsefulData(results);
    };
    retrievePlanets();
  }, []);

  const clearFilter = () => {
    setSearch({ filters: {
      filterByName: { name: '' },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '0',
        },
      ] } });
    setUsefulData(data);
  };

  return (
    <PlanetsContext.Provider
      value={ { usefulData, search, setSearch, handleSearchClick, clearFilter } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
