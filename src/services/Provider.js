import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [filterHandler, setFilterHandler] = useState({
    column: 'population', comparison: 'maior que', value: '',
  });

  // Filtros Salvos
  const [filters, setFilters] = useState({
    filterByName: {
      name: 'name',
    },
    filterByNumericValues: [],
  });

  // Filtrando por valor populacional a partir do reultado da optionBox

  function filterNumericValues(results) {
    let filterPlanets = [];
    const numericValues = filters.filterByNumericValues;
    if (!numericValues.length) {
      return setData(results);
    }
    const value = results.filter((result) => (
      numericValues.every((fil) => {
        switch (fil.comparison) {
          case 'maior que':
            filterPlanets = result.filter((row) => row[fil.column] > parseInt(fil.value, 10));
            return setData(filterPlanets);
          case 'menor que':
            filterPlanets = result.filter((row) => row[fil.column] < parseInt(fil.value, 10));
            return setData(filterPlanets);
          case 'igual a':
            filterPlanets = result.filter((row) => row[fil.column] === fil.value);
            return setData(filterPlanets);
          default:
            filterName(result);
          }
        })
      ));
    setData(value);
  }

  // Filtro direto a partir do nome (colocando em caixa baixa para comparação)
  function filterName(results) {
    const { name } = filters.filterByName;
    return results.filter(
      (result) => result.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      || name === '',
    );
  }
  // Chama da API
  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(
        'https://swapi.dev/api/planets/',
      ).then((response) => response.json());
      results.map((planet) => delete planet.residents);
      setDataApi(results);
      setData(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const results = dataApi;
    const filteredName = filterName(results);
    filterNumericValues(filteredName);
  }, [filters]);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    filterHandler,
    setFilterHandler,
  };
  // Relação indireta
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
