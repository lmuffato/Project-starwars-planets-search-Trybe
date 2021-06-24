import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './Context';
import planets from '../services/requestPlantes';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const result = await planets();
    setData(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <ContextPlanets.Provider value={ contextValue }>
      {children}
    </ContextPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
