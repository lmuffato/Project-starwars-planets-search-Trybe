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

  const [order, setOrder] = useState({
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  return (
    <PlanetsContext.Provider
      value={
        { planets,
          setPlanets,
          filteredByName,
          setFilteredByName,
          filteredByNumbers,
          setFilteredByNumbers,
          order,
          setOrder }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
};

PlanetsProvider.defaultProps = {
  children: PropTypes.node,
};
