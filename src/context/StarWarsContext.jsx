import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  const [state, setState] = useState({});

  return (
    <StarWarsContext.Provider value={ { state, setState } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
