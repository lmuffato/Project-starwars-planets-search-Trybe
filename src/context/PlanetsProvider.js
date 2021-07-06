import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsApi from '../service/planetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputTyped, setInputTyped] = useState('');

  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getRequest = async () => {
      const request = await planetsApi();
      // console.log(request);
      const dataResults = request.results;
      const filtered = dataResults.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData((set) => set.concat(filtered));
    };
    getRequest();
  }, []);

  const handleInputFilter = (value) => {
    setInputTyped(value);
  };

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState,
      filtersByName: {
        name: inputTyped,
      },
    }));
  }, [inputTyped]);

  return (
    <PlanetsContext.Provider
      value={ { data, isLoading, setData, setIsLoading, filters, handleInputFilter } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
