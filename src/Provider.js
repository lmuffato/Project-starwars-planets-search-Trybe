import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const contextValue = {
    data,
    setData,
    header,
    setHeader,
    filters,
    setFilters,
  };

  useEffect(() => {
    const resquestApi = async () => {
      const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchMade = await fetch(urlAPI);
      const jsonThreatment = await fetchMade.json();
      const results = Object.keys(jsonThreatment.results[0])
        .filter((response) => response !== 'residents');
      setData(jsonThreatment);
      setHeader(results);
    };
    resquestApi();
  }, []);

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
