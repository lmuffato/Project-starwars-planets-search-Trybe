import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI, {
  dataWithoutResidents,
} from '../services/fetchAPI';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  const [apiPlanets, setPlanets] = useState([]); // estado que recebe o array original da API
  const [soughtPlanets, setSoughtPlanets] = useState([]); // segundo estado pra gerenciar mudanças nos filtros
  const [isLoading, setLoading] = useState(true); // booleana para renderização do loading
  const [filterByNumericValues, setFiltersByNumericValue] = useState([]); // gerencia os filtros

  // Requisito 1
  async function fetchPlanetsAPI() {
    const planets = await fetchDataFromStarWarsAPI();
    const planetsData = [...planets.results];
    dataWithoutResidents(planetsData);
    setPlanets(planetsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchPlanetsAPI();
  }, []);

  // Parte do requisito 3 - estabelece comparação entre os operadores
  const comparingNumericFilters = (
    comparison,
    column,
    value,
    filterNumericValues,
  ) => {
    if (filterNumericValues.length === 0) {
      return apiPlanets;
    }
    switch (comparison) {
    case 'maior que':
      setSoughtPlanets(
        [...apiPlanets].filter(
          (planet) => Number(planet[column]) > Number(value),
        ),
      );
      return soughtPlanets;
      // break;
    case 'menor que':
      setSoughtPlanets(
        [...apiPlanets].filter(
          (planet) => Number(planet[column]) < Number(value),
        ),
      );
      return soughtPlanets;
      // break;
    case 'igual a':
      setSoughtPlanets(
        [...apiPlanets].filter(
          (planet) => Number(planet[column]) === Number(value),
        ),
      );
      return soughtPlanets;
      // break;
    default:
      return apiPlanets;
    }
  };

  // outra parte do requisito 3
  const getFilteredPlanets = () => {
    filterByNumericValues.forEach((item) => {
      const { filterColumn, filterComparisonType, filterValue } = item;
      comparingNumericFilters(
        filterComparisonType,
        filterColumn,
        filterValue,
        filterByNumericValues,
      );
    });
  };

  // Requisito 2
  const filteredPlanets = (inputVal) => {
    setSoughtPlanets(
      apiPlanets.filter((planet) => (
        planet.name.toLowerCase().includes(inputVal.toLowerCase()))),
    );
  };

  // variáveis de estado global
  const contextValue = {
    isLoading,
    data: apiPlanets, // array original de planetas, vindos da API
    filteredPlanets, // fn que filtra pelo nome do planeta
    soughtPlanets, // array de planetas buscados pelos filtros (SearchBar, maior/menor/igual)
    setFiltersByNumericValue, // setState dos filtros numéricos
    filterByNumericValues, // estado dos filtros numéricos
    getFilteredPlanets, // fn itera sobre o array de filtros e faz o switch case de cada tipo de operador
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// https://fb.me/react-hooks-data-fetching
// https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback
