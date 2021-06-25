import React, { useState } from 'react';
import PropTypes from 'prop-types';

import API from '../config/config';

import PlanetContext from './PlanetsContext';

function PlanetProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(API);
    const dataAPI = await response.json();
    setData(dataAPI.results.map((el) => {
      const { residents, ...rest } = el;
      return rest;
    }));
    setIsLoading(false);
  }

  return (
    <PlanetContext.Provider value={ { isLoading, data, fetchData } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PlanetProvider;
