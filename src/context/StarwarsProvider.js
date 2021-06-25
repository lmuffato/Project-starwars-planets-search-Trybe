import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    setDataTable(data);
    if (filters.filterByName.name) {
      const filteredResult = data.filter(
        (planet) => planet.name.includes(filters.filterByName.name),
      );
      setDataTable(filteredResult);
    }
  }, [data, filters.filterByName.name]);

  return (
    <starwarsContext.Provider value={ { dataTable, filters, setFilters } }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
