import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/starWarsAPI';
import { globalState } from './data';

// Agradecimento mais que especial à Heloísa Hackenhaar - Turma 10 - Tribo A, nos requisitos 3 e 4 (principalmente paciência em explicar cada processo e consertar possíveis erros que poderiam vir do requisito 2)

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // recupera os dados da api
  const [filterPlanets, setFilterPlanets] = useState([]); // armazena os planetas filtrados
  const [getNames, setGetNames] = useState(''); // armazena o valor do nome digitado
  const [columnFilter, setColumnFilter] = useState('population'); // armazena o valor da coluna
  const [comparisonFilter, setComparisonFilter] = useState('maior que'); // armazena o valor de comparação
  const [valueFilter, setValueFilter] = useState(''); // armazena o valor numérico
  const [newState, setNewState] = useState(globalState); // seta o filtro no estado global

  useEffect(() => {
    const getApiPlanets = async () => {
      const { results } = await getAPI();
      setPlanets(results);
    };

    getApiPlanets();
  }, []);

  // 3 - caso algum filtro seja selecionado, qual foi o método utilizado
  const comparisonNumbers = (valueText) => {
    console.log('entrou de novo');
    const { filterByNumericValues } = newState.filters;
    let lastFilter = planets;
    // 1 - se tem conteudo de texto ou não
    if (valueText !== '') {
      lastFilter = planets
        .filter((planet) => planet.name.toLowerCase().includes(valueText));
    }
    // pego o objeto que tem o conteúdo dos filtros selecionados pelo usuário
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) > Number(value)
        ));
      } else if (comparison === 'menor que') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) < Number(value)
        ));
      } else if (comparison === 'igual a') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) === Number(value)
        ));
      }
    });
    return lastFilter;
  };

  // usado para atualizar automaticamente caso o usuário digite e/ou adicione filtro numérico
  useEffect(() => {
    const { filterByNumericValues } = newState.filters;
    const convertText = getNames.toLowerCase();
    // 1 - ver se o usuario pesquisou por texto ou não
    if (convertText === '' && filterByNumericValues === []) {
      setFilterPlanets(planets);
    } else if (convertText !== '' && filterByNumericValues === []) {
      const planetsNames = planets
        .filter((planet) => planet.name.toLowerCase().includes(convertText));
      setFilterPlanets(planetsNames);
      // 2 - se o usuário pesquisou por valores numéricos
    } else if (filterByNumericValues !== []) {
      setFilterPlanets(comparisonNumbers(convertText));
    }
  }, [getNames, newState, planets, setFilterPlanets]);

  return (
    <StarWarsContext.Provider
      value={ {
        getNames,
        setGetNames,
        columnFilter,
        setColumnFilter,
        comparisonFilter,
        setComparisonFilter,
        valueFilter,
        setValueFilter,
        newState,
        setNewState,
        filterPlanets,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
