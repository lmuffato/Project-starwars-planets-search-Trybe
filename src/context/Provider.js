import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import api from '../services/api';
import Context from './Context';

/**
 * Reutilizei o código do Tiago Yoneda para fazer algumas funções e criar os estados das variáveis.
 * Link do repositório: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
 */
const Provider = ({ children }) => {
  const [planets, setPlanets] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState();
  const [filters, setFilters] = useState({
    filterByName: { name: '' }, filterByNumericValues: [],
  });
  const [customFilter, setCustomFilter] = useState({
    column: 'population', comparison: 'maior que', value: '0',
  });
  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const handleCustomFilter = ({ target: { name, value } }) => {
    setCustomFilter({
      ...customFilter,
      [name]: value,
    });
  };

  // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
  const getPlanetsData = async () => {
    const planetData = await api();
    setPlanets(planetData);
    setFilteredPlanets(planetData);
  };

  const filterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
  const sendToState = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, { customFilter }],
    });
    console.log(customFilter);
  };

  // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
  const filterByNumericValue = (custom) => {
    const planetList = planets.filter((planet) => {
      const columnPlanets = Number(planet[custom.column]);
      const numberedValue = Number(custom.value);

      if (custom.comparison === 'maior que') return columnPlanets > numberedValue;
      if (custom.comparison === 'menor que') return columnPlanets < numberedValue;
      return columnPlanets === numberedValue;
    });

    setFilteredPlanets(planetList);
    const newOptions = options.filter((option) => option !== custom.column);
    setOptions(newOptions);
  };

  // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
  const handleButtonClick = () => {
    sendToState();
    filterByNumericValue(customFilter);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    filters,
    filterByName,
    customFilter,
    handleCustomFilter,
    filteredPlanets,
    filterByNumericValue,
    sendToState,
    options,
    handleButtonClick,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
