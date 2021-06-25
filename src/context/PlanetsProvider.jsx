import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import services from '../services/api';

import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    { column: '', comparision: '', value: '' }]);

  useEffect(() => {
    (async () => {
      const fetchPlanets = await services.fetchPlanets();
      setPlanets(fetchPlanets);
    })();
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      const getKeys = Object.keys(planets[0]);
      setKeys(getKeys);
    }
  }, [planets]);

  const filteredPlanets = planets
    .filter((planet) => planet.name.includes(filterName.filterByName.name));

  const filterByNumeric = () => {
    const finalFilter = filteredPlanets.filter((planet) => {
      const filteredColumn = filterByNumericValues[filterByNumericValues
        .length - 1].column;
      const filteredComparison = filterByNumericValues[filterByNumericValues
        .length - 1].comparison;
      const filteredValue = filterByNumericValues[filterByNumericValues
        .length - 1].value;

      console.log(filteredComparison);

      if (filteredComparison === 'maior que') {
        return parseFloat(planet[filteredColumn]) > filteredValue;
      }

      if (filteredComparison === 'menor que') {
        return parseFloat(planet[filteredColumn]) < filteredValue;
      }

      if (filteredComparison === 'igual a') {
        return planet[filteredColumn] === filteredValue;
      }

      return planet[filteredColumn];
    });

    if (finalFilter) {
      return finalFilter;
    }

    return filteredPlanets;
  };

  console.log(filterByNumeric());

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        keys,
        setPlanets,
        filterName,
        setFilterName,
        filteredPlanets,
        filterByNumericValues,
        setFilterByNumericValues,
        filterByNumeric } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default PlanetsProvider;
