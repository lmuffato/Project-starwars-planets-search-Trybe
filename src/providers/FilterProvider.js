import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from '../context/FilterContext';
import DataContext from '../context/DataContext';

const FilterProvider = ({ children }) => {
  // 2o Criar novos estados dos inputs
  const { data } = useContext(DataContext);
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

  const anotherComparisonFilter = (valueInputText) => {
    const { filterByNumericValues } = newState.filters;
    let filterSelected = data;

    if (valueInputText !== '') { // Verefica o q foi digitado, e retorna a variável 'data' filtrada
      filterSelected = filterSelected.filter((planet) => planet.name
        .toLowerCase().includes(valueInputText));
    }
    filterByNumericValues.forEach((eachValue) => { // percorre cada planeta comparando o valor digitado com a respectiva coluna
      if (eachValue.comparison === 'maior que') {
        filterSelected = filterSelected.filter((eachPlanet) => (
          Number(eachPlanet[eachValue.column]) > Number(eachValue.value)
        ));
      } else if (eachValue.comparison === 'menor que') {
        filterSelected = filterSelected.filter((eachPlanet) => (
          Number(eachPlanet[eachValue.column]) < Number(eachValue.value)
        ));
      } else if (eachValue.comparison === 'igual a') {
        filterSelected = filterSelected.filter((eachPlanet) => (
          Number(eachPlanet[eachValue.column]) === Number(eachValue.value)
        ));
      }
    });
    return filterSelected;
  };

  useEffect(() => {
    const { filterByNumericValues } = newState.filters;
    const inputTextValue = filterNames.toLowerCase();
    // PARTE II - Logica de renderizacao dos filtros ////
    // 1o Se o usuario nao pesquisou por texto e valor, volta todos os planetas
    if (inputTextValue === '' && filterByNumericValues.length === 0) {
      setFilteredPlanets(data);
    } else if (inputTextValue !== '' && filterByNumericValues.length === 0) {
      const planetsName = data.filter((planet) => planet.name
        .toLowerCase().includes(inputTextValue));
      setFilteredPlanets(planetsName);
    } else if (filterByNumericValues.length > 0) {
      setFilteredPlanets(anotherComparisonFilter(inputTextValue));
    }
  }, [data, newState, filterNames, setFilteredPlanets]);

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
