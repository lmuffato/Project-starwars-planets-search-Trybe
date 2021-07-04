import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getApi from '../services/getApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi().then((result) => setData(result));
  }, []);

  return (
    <Context.Provider value={ { data } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
