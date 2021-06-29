import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../services/getAPIs';
import PlanetContext from './PlanetContext';

/* 3 - Crie um filtro para valores numéricos */
function Provider({ children }) {
  const [planets, dispatchPlanets] = useState([]);
  const [query, dispatchQuery] = useState([planets]);

  const [filterOptions, filterOptionDispatch] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
  });

  const [filters, filterDispatch] = useState({
    filterByName: {
      name: '',
    },
    filterByNumber: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    getAPI().then((results) => dispatchPlanets(results));
  }, []);

  useEffect(() => {
    const results = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    dispatchQuery(results);
  }, [filters, planets]);

  /*
  O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: population, orbital_period, diameter, rotation_period e surface_water. Deve ser uma tag select com a propriedade data-testid='column-filter';
  O segundo deve determinar se a faixa de valor será maior que, menor que ou igual a o numero que virá a seguir. Uma tag select com a propriedade data-testid='comparison-filter';
  O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag input com a propriedade data-testid='value-filter';
  Deve haver um botão para acionar o filtro, com a propriedade data-testid='button-filter'.
  */
  useEffect(() => {
    const { column, comparison, value } = filters.filterByNumber[0];
    if (comparison === 'maior que') {
      const filteredPlanets = planets.filter((planet) => (
        Number(planet[column])
        > Number(value)));
      dispatchQuery(filteredPlanets);
    }
    if (comparison === 'menor que') {
      const filteredPlanets = planets.filter((planet) => (
        Number(planet[column])
        < Number(value)));
      dispatchQuery(filteredPlanets);
    }
    if (comparison === 'igual a') {
      const filteredPlanets = planets.filter((planet) => (
        Number(planet[column])
        === Number(value)));
      dispatchQuery(filteredPlanets);
    }
  }, [filters, planets]);

  const contextData = {
    filterDispatch,
    query,
    filters,
    filterOptions,
    filterOptionDispatch,
  };

  return (
    <PlanetContext.Provider value={ contextData }>
      {children}
    </PlanetContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;
