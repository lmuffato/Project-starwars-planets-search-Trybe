import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [planetName, setPlanetName] = useState('');

  const contextFilter = {
    planetName,
    setPlanetName,
    filters: { filterByName: { name: { planetName } },
    },
  };

  return (
    <FilterContext.Provider value={ contextFilter }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
