import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [data, loaldPlanets] = useState([]);
  const [filteredPlanets, updatePlanetList] = useState([]);
  const [isLoalding, setIsLoalding] = useState(false);
  const [filterColumnOptions, setColumnOptions] = useState([]);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  };

  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const deleteNumericFilter = (column) => {
    const filterByNumericValues = filters.filterByNumericValues
      .filter((filter) => filter.column !== column);
    setFilters({
      ...filters,
      filterByNumericValues,
    });
  };

  const updateColumnOptions = () => {
    const initialColumnOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const activeFilters = filters.filterByNumericValues.map((filter) => filter.column);
    const columnOptions = initialColumnOptions
      .filter((option) => !activeFilters.includes(option));
    setColumnOptions(columnOptions);
  };

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
    const filterByName = { name: nameFilter };
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

  const sortPlanetList = (planetList) => {
    const { order } = filters;
    const planetsSorted = planetList.sort((a, b) => {
      let result = {};
      const test = a[order.column] === 'unknown'
        ? false
        : Number.isNaN(Number(a[order.column]));
      if (test) {
        result = order.sort === 'ASC'
          ? a[order.column].localeCompare(b[order.column])
          : b[order.column].localeCompare(a[order.column]);
      } else {
        result = order.sort === 'ASC'
          ? Number(a[order.column]) - Number(b[order.column])
          : Number(b[order.column]) - Number(a[order.column]);
      }
      return result;
    });
    return planetsSorted;
  };

  const applyFilters = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const wordFilter = new RegExp(name, 'i');
    let planetsFiltered = data.filter((planet) => wordFilter.test(planet.name));
    filterByNumericValues.forEach((filter) => {
      const { comparison, value, column } = filter;
      if (comparison !== '' && value !== '') {
        switch (comparison) {
        case 'menor que':
          planetsFiltered = planetsFiltered
            .filter((planet) => Number(planet[column]) < Number(value));
          break;
        case 'maior que':
          planetsFiltered = planetsFiltered
            .filter((planet) => Number(planet[column]) > Number(value));
          break;
        case 'igual a':
          planetsFiltered = planetsFiltered
            .filter((planet) => Number(planet[column]) === Number(value));
          break;
        default: console.log('Erro na detecção tipo de comparação do filtro numérico');
        }
      }
    });
    planetsFiltered = sortPlanetList(planetsFiltered);
    updatePlanetList(planetsFiltered);
  };

  useEffect(() => {
    applyFilters();
    updateColumnOptions();
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

  useEffect(() => {
    const start = async () => {
      await getDataPlanets();
    };
    start();
  }, []);

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
        filterColumnOptions,
        deleteNumericFilter,
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

export const comparisonOptions = [
  'maior que',
  'igual a',
  'menor que',
];

export default ProviderPlanets;
