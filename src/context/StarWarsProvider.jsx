import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/starWarsAPI';

// Agradecimento mais que especial à Heloísa Hackenhaar - Turma 10 - Tribo A (principalmente paciência)

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // recupera os dados da api
  const [filterPlanets, setFilterPlanets] = useState([]); // aqui vou armazenar os planetas filtrados
  const [getNames, setGetNames] = useState(''); // estou armazenando o valor do nome digitado
  const [columnFilter, setColumnFilter] = useState('population'); // armazena o valor da colunas
  const [comparisonFilter, setComparisonFilter] = useState('maior que'); // armazena o valor de comparacao
  const [valueFilter, setValueFilter] = useState(''); // armazena o valor numerico
  const [newState, setNewState] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
  }); // aqui acontece o filtro

  useEffect(() => {
    const getApiPlanets = async () => {
      const { results } = await getAPI();
      setPlanets(results);
    };

    getApiPlanets();
  }, []);

  // 3 - qual o método utilizado no filtro
  const comparisonNumbers = (valueText) => {
    console.log('entrou de novo');
    const { filterByNumericValues } = newState.filters;
    let lastFilter = planets;
    // 1 - se tem conteudo de texto ou nao
    if (valueText !== '') {
      lastFilter = planets
        .filter((planet) => planet.name.toLowerCase().includes(valueText));
    }
    // pego o objeto que tem o conteudo dos filtros selecionados pelo usuario
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) > Number(value)
        ));
        console.log('maior que');
      } else if (comparison === 'menor que') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) < Number(value)
        ));
        console.log('menor que');
      } else if (comparison === 'igual a') {
        lastFilter = lastFilter.filter((planet) => (
          Number(planet[column]) === Number(value)
        ));
        console.log('igual a');
      }
    });
    return lastFilter;
  };

  // usado para atualizar automaticamente caso o usuario digite ou adicione filtro numérico
  useEffect(() => { // se der merda é useEffect
    const { filterByNumericValues } = newState.filters;
    const convertText = getNames.toLowerCase(); // transforma o texto em letra minuscula
    // 1 - ver se o usuario pesquisou por texto ou Não
    if (convertText === '' && filterByNumericValues === []) {
      setFilterPlanets(planets);
    } else if (convertText !== '' && filterByNumericValues === []) {
      const planetsNames = planets
        .filter((planet) => planet.name.toLowerCase().includes(convertText));
      setFilterPlanets(planetsNames);
      // 2 - se o usuario pesquisou por valores numericos ou não
    } else if (filterByNumericValues !== []) {
      setFilterPlanets(comparisonNumbers(convertText));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
