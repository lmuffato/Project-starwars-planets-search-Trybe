import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import fetchPlanets from '../services/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [name, setName] = useState('');
  const [inputsChanges, setInputsChanges] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
  });

  // requisito 1: tratando a api
  useEffect(() => {
    const fetchPlanets = async () => {
      const edpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
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
    setInputsChanges({ ...inputsChanges, [target.name]: target.value });
  };

  const context = {
    planets,
    filterPlanets,
    name,
    handleFilterChange,
    handleSelectChange,
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
