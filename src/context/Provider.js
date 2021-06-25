import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import starWarsApi from '../services/starwarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKey] = useState([]);

  const getKeys = (result) => {
    const keysHeader = Object.keys(result[0]);
    setKey(keysHeader);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await starWarsApi();
      // console.log(result);
      setData(result);

      getKeys(result);
    };

    fetchAPI();
  }, []);

  const context = {
    data,
    keys,
    setData,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
