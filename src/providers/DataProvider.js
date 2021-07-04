import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../fecthAPI';
import DataContext from '../context/DataContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const { results } = await fetchAPI();
      setData(results);
    };
    apiData();
  }, []);

  return (
    <DataContext.Provider value={ { data } }>
      { children }
    </DataContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Provider;
