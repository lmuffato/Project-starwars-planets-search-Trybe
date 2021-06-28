import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [filterByColumn, setFilterByColumn] = useState('population');
  const [filterByComparison, setFilterByComparison] = useState('maior que');
  const [filterByValue, setFilterByValue] = useState('100000');
  const [keyAPI, setKeyAPI] = useState(true);
  const [keyButton, setKeyButton] = useState(true);

  const contextValue = {
    data,
    setData,
    header,
    setHeader,
    filters,
    setFilters,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
    keyAPI,
    setKeyAPI,
    keyButton,
    setKeyButton,
  };

  useEffect(() => {
    const resquestApi = async () => {
      const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchMade = await fetch(urlAPI);
      const jsonTreatment = await fetchMade.json();
      const jsonResults = jsonTreatment.results;
      const results = Object.keys(jsonTreatment.results[0])
        .filter((response) => response !== 'residents');
      setData(jsonResults);
      setHeader(results);
      setKeyAPI(false);
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
