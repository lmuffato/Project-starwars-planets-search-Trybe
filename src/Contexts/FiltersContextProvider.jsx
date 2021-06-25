import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext({});

export function FiltersContextProvider({ children }) {
  const categories = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [dropdown, setDropdown] = useState(categories);

  return (
    <FiltersContext.Provider value={ { dropdown, setDropdown, categories } }>
      { children }
    </FiltersContext.Provider>
  );
}

FiltersContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
