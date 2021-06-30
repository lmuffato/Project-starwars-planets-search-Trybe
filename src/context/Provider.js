import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import dataAPI from '../services/planetsAPI';

const initialState = { filters: {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
},
};

function Provider({ children }) {
  const [dataPlanets, setData] = useState([]);
  const [state, setState] = useState(initialState);
  const [columnState, setColumn] = useState('population');
  const [comparisonState, setComparison] = useState('maior que');
  const [valueState, setValue] = useState();
  const [filteredPlanet, setFiltered] = useState([]);

  useEffect(() => {
    dataAPI().then(({ results }) => setData(results));
  }, []);

  useEffect(() => {
    let result = dataPlanets.filter((planet) => {
      const { name } = state.filters.filterByName;
      return planet.name.includes(name);
    });

    const { filterByNumericValues } = state.filters;
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      result = result.filter((planet) => {
        const valueData = parseFloat(planet[column]);
        const valueFilter = parseFloat(value);
        if (comparison === 'maior que') {
          return valueData > valueFilter;
        }
        if (comparison === 'menor que') {
          return valueData < valueFilter;
        }
        if (comparison === 'igual a') {
          return valueData === valueFilter;
        }
        return true;
      });
    });
    setFiltered(result);
  }, [dataPlanets, state]);

  const handleNameFilter = (value) => {
    const updateFilter = { ...state };
    updateFilter.filters.filterByName.name = value;

    setState(updateFilter);
  };

  const handleColumnFilter = (value) => {
    setColumn(value);
  };

  const handleComparisonFilter = (value) => {
    setComparison(value);
  };

  const handleValueFilter = (value) => {
    setValue(value);
  };

  const handleClick = () => {
    const updateFilter = { ...state };
    const properties = {
      column: columnState,
      comparison: comparisonState,
      value: valueState };
    updateFilter.filters.filterByNumericValues.splice(0, 1, properties);
    setState(updateFilter);
  };

  const contextValue = {
    dataPlanets,
    setData,
    state,
    setState,
    filteredPlanet,
    setFiltered,
    handleNameFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    handleClick,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// Explicação e orientação sobre refatoração do Provider para corrigir a forma de usar estados do Guilherme Dornelles - Turma 10A
// Como converter string em numeros para comparar valores: https://eslint.org/docs/rules/radix
