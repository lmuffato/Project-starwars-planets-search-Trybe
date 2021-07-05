import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const contextValue = {
    data,
    setData,
    headers,
    setHeaders,
    filters,
    setFilters,
  };
  useEffect(() => {
    const resquestApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const dataAPI = await fetch(url).then((param) => param.json());
      const head = Object.keys(dataAPI.results[0])
        .filter((param) => param !== 'residents');
      setData(dataAPI);
      setHeaders(head);
    };
    resquestApi();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
