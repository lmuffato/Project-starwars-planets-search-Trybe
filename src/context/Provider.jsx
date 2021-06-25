import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './Context';
import planets from '../services/requestPlantes';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const fetchApi = async () => {
    const response = await planets();
    setData(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const contextValue = {
    data,
    filters: {
      filterByName: {
        name,
      },
    },
    setName,
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
