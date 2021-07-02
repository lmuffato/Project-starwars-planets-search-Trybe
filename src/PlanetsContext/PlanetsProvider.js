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
  const [filterNum, setFilterNum] = useState({
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  function handleChangeNamePlanet(ev) {
    setFilters({ filterByName: { name: ev.target.value } });
  }

  function handleClickNumericValues(column, comparison, value) {
    setFilterNum((previousState) => {
      const mergedData = {
        ...previousState,
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      };

      return setFilterNum(mergedData);
    });
  }

  // didMount
  useEffect(() => {
    FetchStarWarsPlanet().then((fp) => setPlanets(fp));
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        filters,
        filterNum,
        handleChangeNamePlanet,
        handleClickNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
