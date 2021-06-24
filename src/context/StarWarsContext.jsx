import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  // const [state, setState] = useState({});
  const [swPlanets, setSWPlanets] = useState([]);
  const [name, setName] = useState('');

  const contextVal = {
    data: swPlanets,
    filters: {
      filterByName: {
        name,
      },
    },
    setSWPlanets,
    setName,
  };

  return (
    <StarWarsContext.Provider
      value={ contextVal }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
