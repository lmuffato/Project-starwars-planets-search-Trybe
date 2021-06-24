import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsApi from '../services/planetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getPlanetsInfo = await planetsApi();
        setdata(getPlanetsInfo.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    load();
  }, []);
  const context = { data, isLoading, loadError };
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
