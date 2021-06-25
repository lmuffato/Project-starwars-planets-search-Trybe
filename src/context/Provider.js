import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [planets, setPlanets] = useState([]);

  // 1. Faz a requisição na api e armazena os dados, atenção para como estruturar a função
  function getPlanets() {
    const fetchApi = async () => {
      const dataPlanets = await fetchPlanets();
      setData(dataPlanets);
    };
    fetchApi();
  }

  const handleinput = (event) => {
    const { value } = event.target;
    setName(value);
  };
  // ComponentDidMount
  useEffect(getPlanets, []);
  // 2 Defini o filtro dos planetas pelo o que é digitado no input e compara com o nome do Planeta
  // https://codesandbox.io/embed/react-hooks-search-filter-4gnwc
  // ComponetDidUpdate
  useEffect(() => {
    setPlanets(
      data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  const context = {
    data,
    handleinput,
    planets,
    filters: {
      filterByName: { name },
    },
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
