import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const [headTable, setHeadTable] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((info) => info.json());
      results.map((planet) => delete planet.residents);
      setData(results);
      setFiltered(results);
      const headerTable = Object.keys(results[0]);
      setHeadTable(headerTable);
    };
    getAPI();
  }, []);

  const contextData = {
    data, filtered, setFiltered, headTable, setHeadTable,
  };

  return (
    <MyContext.Provider value={ contextData }>
      {children}
    </MyContext.Provider>
  );
}

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
