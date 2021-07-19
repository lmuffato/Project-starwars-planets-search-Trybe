import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetAPI from '../services/planetAPI';
import planetContext from '../Context/planetContext';

function ProviderPlanet({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    planetAPI().then(({ results }) => setData(results));
  }, []);
  console.log('data', data);
  const handleChange = (value) => setName(value);

  return (
    <planetContext.Provider
      value={ { data, handleChange, filters: { filterByName: { name } } } }
    >
      {children}
    </planetContext.Provider>
  );
}

ProviderPlanet.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProviderPlanet;
