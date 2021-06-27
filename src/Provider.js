import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getApi from './services/Api';
import Context from './Context';

const Provider = ({ children }) => {
  const [data, setData] = useState(Context);

  const apiData = async () => {
    const result = await getApi();
    setData(result);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <Context.Provider value={ { data } }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Provider;
