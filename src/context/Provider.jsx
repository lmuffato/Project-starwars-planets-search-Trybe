import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import fetchAPI from '../services/starWarsAPI';
import StarWarsContext from './starWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  // useStates feitos com ajuda do estudo do PR da Elisa França e do seguinte site https://codesandbox.io/embed/react-hooks-search-filter-4gnwc

  useEffect(() => {
    const fetch = async () => {
      const results = await fetchAPI();
      setPlanets(results);
      setFilteredPlanets(results);
    };
    fetch();
  }, []);
  // Função feita com ajuda do Guilherme Dornelles
  const filtersValueFunc = () => {
    const { columnFilter, comparisonFilter, valueFilter } = filters;
    const filterByValue = filteredPlanets.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[columnFilter]) > Number(valueFilter);
      } if (comparisonFilter === 'menor que') {
        return Number(planet[columnFilter]) < Number(valueFilter);
      } return Number(planet[columnFilter]) === Number(valueFilter);
    });
    return setFilteredPlanets(filterByValue);
  };

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    const searchedPlanet = planets.filter((planet) => planet.name.includes(value));
    setFilteredPlanets(searchedPlanet);
  };

  const handleFilterChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };
  // Função feita com ajuda do Guilherme Dornelles
  const handleClick = () => {
    const { columnFilter,
      comparisonFilter,
      valueFilter,
      filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    filtersValueFunc();
  };

  const contextValue = {
    handleChange,
    handleFilterChange,
    handleClick,
    filteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
