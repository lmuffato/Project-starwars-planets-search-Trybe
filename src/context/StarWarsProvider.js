import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    fetchApi().then((results) => setData(results));
  }, []);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    const showFiltered = data.filter((planet) => planet.name.toLowerCase()
      .includes(filters.filterByName.name)
    && data.some((planetData) => planetData.name === planet.name));
    setFiltered(showFiltered);
  }, [filters.filterByName]);

  return (
    <StarWarsContext.Provider value={ { filtered, filters, setFilters } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
