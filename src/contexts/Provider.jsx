import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const requestApi = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await request.json();
    return results.filter((item) => delete item.residents);
  };

  useEffect(() => {
    (async function resolved() {
      const resolve = await requestApi();
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
