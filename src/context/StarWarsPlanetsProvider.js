import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import getStarWarsPlanets from '../services/starwarsAPI';

const StarWarsPlanetsProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchPlanetsData = async () => {
    const planetsData = await getStarWarsPlanets();
    setData(planetsData);
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  const context = {
    data,
    setData,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
};

StarWarsPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsPlanetsProvider;
