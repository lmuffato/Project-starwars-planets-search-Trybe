import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from '../context/FilterContext';
import DataContext from '../context/DataContext';

const FilterProvider = ({ children }) => {
  const { data } = useContext(DataContext);
  // 2o Criar novos estados dos inputs
  const [colunmFilter, setColunmFilter] = useState('population'); // pega valor do input de coluna
  const [comparisonFilter, setComparisonFilter] = useState('maior que'); // pega valor do input de comparacao
  const [valueFilter, setValueFilter] = useState(''); // pega o valor do input numerico
  const [filterNames, setFilterNames] = useState(''); // pega valor do nome que o usuario escreveu
  const [newState, setNewState] = useState({ filters: // sets o filtro no estado global
    { filterByName: { name: '' }, filterByNumericValues: [] } });
  const [filteredPlanets, setFilteredPlanets] = useState([]); // armazena os planetas filtrados

  /* const filter = ({ target: { value } }) => {
    setFilters({ filterByName: { name: value.toLowerCase() } });
  }; */

  useEffect(() => {
    const { filterByNumericValues } = newState.filters;
    const inputTextValue = filterNames.toLowerCase();
    // PARTE II - Logica de renderizacao dos filtros ////
    // 1o Se o usuario nao pesquisou por texto e valor, volta todos os planetas
    if (inputTextValue === '' && filterByNumericValues.length === 0) {
      setFilteredPlanets(data);
    }
  }, [data, newState, filterNames]);

  return (
    <FilterContext.Provider
      value={ {
        colunmFilter,
        setColunmFilter,
        comparisonFilter,
        setComparisonFilter,
        valueFilter,
        setValueFilter,
        newState,
        setNewState,
        filterNames,
        setFilterNames,
        filteredPlanets } }
    >
      { children }
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default FilterProvider;
