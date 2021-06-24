import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchStarWars from '../services/FetchStarWars';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState('');

  useEffect(() => {
    FetchStarWars().then((resp) => setData(resp));
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
