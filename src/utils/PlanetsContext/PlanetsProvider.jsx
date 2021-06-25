import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: { filterByName: { name: '' } },
  });

  return (
    <PlanetsContext.Provider
      value={
        { planets, setPlanets, filter, setFilter }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
