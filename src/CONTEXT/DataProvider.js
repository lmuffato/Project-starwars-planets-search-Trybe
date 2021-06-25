import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function DataProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const getAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((info) => info.json());
      console.log(results);
      setData(results);
    };

    getAPI();
  }, []);
  return (
    <MyContext.Provider value={ data }>
      {children}
    </MyContext.Provider>
  );
}

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
