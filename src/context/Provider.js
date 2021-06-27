import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // requisito 1: tratando a api
  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const edpoint = await fetch(url);
      const response = await edpoint.json();
      const { results } = response;
      setPlanets(results);
      setFilterPlanets(results);
    };
    fetchPlanets();
  }, []);

  // requisito 2: para habilitar o input e filtrar a busca dos planetas
  // pelo valor digitado
  const handleFilterChange = ({ target: { value } }) => {
    setName(value);
    const nameFilter = planets.filter((planet) => planet.name.includes(value));
    setFilterPlanets(nameFilter);
  };

  // requisito 3 - para selecionar os filtros
  const handleSelectChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  // requisito 3 - criando filtro
  const filterInputs = () => {
    const { columnFilter, comparisonFilter, valueFilter } = filters;
    const newFilter = filterPlanets.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return parseInt(planet[columnFilter], 10) > parseInt(valueFilter, 10);
      } if (comparisonFilter === 'menor que') {
        return parseInt(planet[columnFilter], 10) < parseInt(valueFilter, 10);
      } return parseInt(planet[columnFilter], 10) === parseInt(valueFilter, 10);
    });
    return setFilterPlanets(newFilter);
  };

  // requisito 3 - handleClick que seta os selects no estado e é adicionada
  // no onClick do component Inputs
  const handleSelectClick = () => {
    const {
      filterByNumericValues,
      columnFilter,
      comparisonFilter,
      valueFilter } = filters;
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
    filterInputs();
  };

  const context = {
    planets,
    filterPlanets,
    name,
    filters,
    handleFilterChange,
    handleSelectChange,
    handleSelectClick,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Referências:
// filterInputs - criada com o auxílio do Adão Jr - Turma 10B
// parseInt - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// parseInt - https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript
// parseInt e radix parameter - https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
