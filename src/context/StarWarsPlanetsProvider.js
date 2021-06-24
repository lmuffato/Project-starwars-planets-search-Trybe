import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import getStarWarsPlanets from '../services/starwarsAPI';

const StarWarsPlanetsProvider = ({ children }) => {
  const [data, setData] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchPlanetsData = async () => {
    const planetsData = await getStarWarsPlanets();
    setData(planetsData);
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

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  const context = {
    data,
    setData,
    filters,
    filterByName,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
};

StarWarsPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsPlanetsProvider;
