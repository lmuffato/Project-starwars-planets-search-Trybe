import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// requisição da API
// Tirar o residents
// colocar numa tabela. Componentizar?
function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([]);

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
    let filterPlanets = planets;
    filterPlanets = planets.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [planets, searchName]);

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
