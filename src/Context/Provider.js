import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// requisição da API
// Tirar o residents
// colocar numa tabela. Componentizar?
function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([planets]);
  const [columnOptions, setColumnOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const [preferences, setPreferences] = useState({
    column: 'population',
    comparison: 'maior que',
    number: '',
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      results.map((obj) => delete obj.residents);
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  // 2º requisito - Filtrar por nome
  // Criar Componente pra colocar os filtros
  // fazer o useEffect com o filtro aqui e exportar

  const handleSearchName = ({ target }) => {
    setSearchName(target.value);
  };

  useEffect(() => {
    const filterPlanets = planets.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [planets, searchName]);

  // 3º requisito - filtro por número e usar o dropdown
  // lógica e conteúdo do dropdown aqui e joga pro filter
  // lembrar que aqui é o cartão de memória da aplicação

  const handlePreferences = ({ target }) => {
    setPreferences({ ...preferences, [target.name]: target.value });
  };

  const preferencesFiltered = ({ column, comparison, number }) => {
    const newFiltered = planets.filter((planet) => {
      const columnInfo = Number(planet[column]);
      const compareValue = Number(number);

      if (comparison === 'maior que') return columnInfo < compareValue;
      if (comparison === 'menor que') return columnInfo < compareValue;
      return columnInfo === compareValue;
    });
    setFilterPlanet(newFiltered);
  };

  const handleClick = () => {
    let copyColumn = columnOptions;
    copyColumn = columnOptions.filter((column) => column !== preferences.column);
    setColumnOptions(copyColumn);
    preferencesFiltered(preferences);
  };

  const data = { planets,
    filters: {
      filterByName: {
        name: '',
      },
    },
    searchName,
    setSearchName,
    setPlanets,
    filterPlanet,
    setFilterPlanet,
    handleSearchName,
    handlePreferences,
    preferencesFiltered,
    handleClick,
    comparisons,
    preferences,
    columnOptions,
    setColumnOptions,
  };
  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
