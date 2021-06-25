import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [data, loaldPlanets] = useState([]);
  const [filteredPlanets, updatePlanetList] = useState([]);
  const [isLoalding, setIsLoalding] = useState(false);
  const INITIAL_FILTERS = {
    filters: {
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
    },
  };

  const [dataFilters, setFilters] = useState(INITIAL_FILTERS);

  const updateNumericFilter = (newNumericFilter) => {
    const filterByNumericValues = dataFilters.filters.filterByNumericValues
      .filter((filter) => filter.column !== newNumericFilter.column);
    filterByNumericValues.push(newNumericFilter);
    setFilters({
      ...dataFilters,
      filters: {
        ...dataFilters.filters,
        filterByNumericValues,
      },
    });
  };

  const updateNameFilter = (nameFilter) => {
    const filterByName = nameFilter;
    setFilters({
      ...dataFilters,
      filters: {
        ...dataFilters.filters,
        filterByName,
      },
    });
  };

  const applyFilters = () => {
    const { filterByName: { name }, filterByNumericValues, order } = dataFilters.filters;
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
    updatePlanetList(planetsFiltered);
  };

  useEffect(() => {
    applyFilters();
  }, [dataFilters, data]);

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
        filters: dataFilters.filters,
        updateNumericFilter,
        updateNameFilter,
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

export default ProviderPlanets;
