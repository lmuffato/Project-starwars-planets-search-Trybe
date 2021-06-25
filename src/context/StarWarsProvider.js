import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchStarWars from '../services/FetchStarWars';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  function getText({ target }) {
    setFilters({ ...filters,
      filterByName: {
        name: target.value,
      } });
  }

  useEffect(() => {
    FetchStarWars().then((resp) => setData(resp));
  }, []);

  const { filterByName } = filters;
  const { name } = filterByName;
  return (
    <StarWarsContext.Provider value={ { data, getText, name } }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
