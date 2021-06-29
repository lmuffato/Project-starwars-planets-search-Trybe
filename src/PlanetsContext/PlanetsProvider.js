import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import FetchStarWarsPlanet from '../services/api';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  function handleChangeNamePlanet(ev) {
    setFilters({ filterByName: { name: ev.target.value } });
  }

  // didMount
  useEffect(() => {
    FetchStarWarsPlanet().then((fp) => setPlanets(fp));
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { planets, filters, handleChangeNamePlanet } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
