import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import request from '../services/request';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function resolved() {
      const resolve = await request();
      setData(resolve);
    }());
  }, []);

  return (
    <context.Provider value={ { data } }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
