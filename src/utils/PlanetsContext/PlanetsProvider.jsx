import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filteredByName, setFilteredByName] = useState({
    filters: { filterByName: { name: '' },
    },
  });

  const [filteredByNumbers, setFilteredByNumbers] = useState({
    filterByNumericValues: [],
  });

  // const size = filteredByNumbers.filterByNumericValues.length - 1;

  // const [indexFilter, setIndexFilter] = useState(size);

  return (
    <PlanetsContext.Provider
      value={
        { planets,
          setPlanets,
          filteredByName,
          setFilteredByName,
          filteredByNumbers,
          setFilteredByNumbers }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
