import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsApi from '../services/planetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [filters, setfilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [copyResults, setcopyResults] = useState([]);

  const setFilterByName = (event) => {
    const { value } = event.target;
    setfilters({ filterByName: { name: value.toLowerCase() } });
  };

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getPlanetsInfo = await planetsApi();
        setData(getPlanetsInfo.results);
        setcopyResults(getPlanetsInfo.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    load();
  }, []);
  // const { name } = filters.filterByName;
  const context = { data,
    isLoading,
    loadError,
    filters,
    setFilterByName,
    setData,
    copyResults };
  const { children } = props;
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
