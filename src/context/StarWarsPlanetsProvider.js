import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import getStarWarsPlanets from '../services/starwarsAPI';

const StarWarsPlanetsProvider = ({ children }) => {
  const [data, setData] = useState();

  const [filteredPlanets, setFilteredPlanets] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    numericFilter: [],
  });

  const [customFilter, setCustomFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const changeCustomFilter = (event) => {
    const { name, value } = event.target;
    setCustomFilter({
      ...customFilter,
      [name]: value,
    });
  };

  const fetchPlanetsData = async () => {
    const planetsData = await getStarWarsPlanets();
    setData(planetsData);
    setFilteredPlanets(planetsData);
  };

  const filterByName = (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      filtersByName: {
        name: value,
      },
    });
  };

  const numericFilter = ({ column, comparison, value }) => {
    const filteredPlanetList = data.filter((planet) => {
      const columnData = Number(planet[column]);
      const numberedValue = Number(value);
      if (comparison === 'maior que') {
        return columnData > numberedValue;
      }
      if (comparison === 'menor que') {
        return columnData < numberedValue;
      }
      return columnData === numberedValue;
    });
    setFilteredPlanets(filteredPlanetList);
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  const context = {
    data,
    setData,
    filters,
    filterByName,
    customFilter,
    changeCustomFilter,
    filteredPlanets,
    numericFilter,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
};

StarWarsPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsPlanetsProvider;
