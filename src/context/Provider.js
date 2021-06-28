import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [planets, setPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('>');
  const [value, setValue] = useState('0');
  const [filterByNumericValues, setFilter] = useState([]);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  // 1. Faz a requisição na api e armazena os dados, atenção para como estruturar a função
  function getPlanets() {
    const fetchApi = async () => {
      const dataPlanets = await fetchPlanets();
      setData(dataPlanets);
    };
    fetchApi();
  }
  const handleinput = (event) => {
    const { target } = event;
    setName(target.value);
  };
  const handleFilter = () => {
    if (filterByNumericValues === []) {
      setFilter([{
        column,
        comparison,
        value,
      }]);
    } else {
      setFilter([...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ]);
    }
  };

  const getFilter = (cl, cm, vl) => {
    const planetsFilter = data.filter((planet) => {
      const columOptins = Number(planet[cl]);
      const valueFilter = Number(vl);
      if (cm === 'maior que') return columOptins > valueFilter;
      if (cm === 'menor que') return columOptins < valueFilter;
      return columOptins === valueFilter;
    });
    setPlanets(planetsFilter);
    const newOptions = options.filter((option) => option !== cl);
    setOptions(newOptions);
  };

  function handleClick() {
    handleFilter();
    getFilter(column, comparison, value);
    console.log('teste');
  }
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
    setColumn,
    setComparison,
    setValue,
    handleClick,
    options,
    filters: {
      filterByName: { name },
      filterByNumericValues,
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
