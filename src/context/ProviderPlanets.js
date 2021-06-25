import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [data, loaldPlanets] = useState([]);
  const [filteredPlanets, updatePlanetList] = useState([]);
  const [isLoalding, setIsLoalding] = useState(false);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: '',
        value: '',
      },
      {
        column: 'orbital_period',
        comparison: '',
        value: '',
      },
      {
        column: 'rotation_period',
        comparison: '',
        value: '',
      },
      {
        column: 'surface_water',
        comparison: '',
        value: '',
      },
    ],
    order: { column: 'name', sort: 'ASC' },
  };

  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const updateNumericFilter = (newNumericFilter) => {
    const filterByNumericValues = filters.filterByNumericValues
      .filter((filter) => filter.column !== newNumericFilter.column);
    filterByNumericValues.push(newNumericFilter);
    setFilters({
      ...filters,
      filterByNumericValues,
    });
  };

  const updateNameFilter = (nameFilter) => {
    const filterByName = nameFilter;
    setFilters({
      ...filters,
      filterByName,
    });
  };

  const updateSortKey = (newSortKey) => {
    setFilters({
      ...filters,
      order: { ...newSortKey },
    });
  };

  const applyFilters = () => {
    console.log('applyFilter foi chamada');
    const { filterByName: { name }, filterByNumericValues, order } = filters;
    const wordFilter = new RegExp(name, 'i');
    let planetsFiltered = data.filter((planet) => wordFilter.test(planet.name));
    filterByNumericValues.forEach((filter) => {
      const { comparison, value, column } = filter;
      if (comparison !== '' && value !== '') {
        switch (comparison) {
        case 'menor que':
          planetsFiltered = planetsFiltered.filter((planet) => planet[column] < value);
          break;
        case 'maior que':
          planetsFiltered = planetsFiltered.filter((planet) => planet[column] > value);
          break;
        case 'igual a':
          planetsFiltered = planetsFiltered.filter((planet) => planet[column] === value);
          break;
        default: console.log('Erro na detecção tipo de comparação do filtro numérico');
        }
      }
    });
    planetsFiltered = planetsFiltered.sort((a, b) => (
      order.sort === 'ASC'
        ? a[order.column] - b[order.column]
        : b[order.column] - a[order.column]
    ));
    console.log(planetsFiltered);
    updatePlanetList(planetsFiltered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  const getDataPlanets = async () => {
    setIsLoalding(true);
    let dataPlanet = [];
    const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    let page = await fetch(endPoint);
    page = await page.json();
    page = page.results;
    page = page.map((planet) => {
      delete planet.residents;
      return planet;
    });
    dataPlanet = [...dataPlanet, ...page];
    loaldPlanets(dataPlanet);
    setIsLoalding(false);
  };

  return (
    <ContextPlanets.Provider
      value={ {
        filteredPlanets,
        getDataPlanets,
        isLoalding,
        filters,
        updateNumericFilter,
        updateNameFilter,
        updateSortKey,
      } }
    >
      { children }
    </ContextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape(
    PropTypes.object,
  )),
}.isRequired;

export const columnTitle = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

export const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const comparisonOptions = [
  'maior que',
  'menor que',
  'igua a',
];

export default ProviderPlanets;
