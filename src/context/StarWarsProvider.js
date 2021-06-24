import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// import FetchStarWars from '../services/FetchStarWars';

function StarWarsProvider({ children }) {
  return (
    <StarWarsContext.Provider value="">
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
