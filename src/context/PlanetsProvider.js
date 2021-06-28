import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsApi from '../service/planetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterData = (planets) => {
    const filtered = planets.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(filtered);
  };

  useEffect(() => {
    const getRequest = async () => {
      setIsLoading(true);
      const request = await planetsApi();
      const dataResults = request.results;
      filterData(dataResults);
      setIsLoading(false);
    };
    getRequest();
  }, []);
  return (
    <PlanetsContext.Provider
      value={ { data, isLoading, setData, setIsLoading } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
