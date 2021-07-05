import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
// import getPlanets from '../services/Api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [listPlanets, setListPlanets] = useState([]);
  const [filterByNumericValues, setfilterByNumericValues] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  useEffect(() => {
    const getElements = async () => {
      // const getPlanets = 'https://swapi.dev/api/planets'';
      const getPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(getPlanets).then((planets) => planets.json());
      const keys = Object.keys(results[0]);
      const itens = keys.filter((head) => head !== 'residents');
      const planets = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(planets);
      setHeader(itens);
      setListPlanets(planets);
    };
    getElements();
  }, []);

  const elements = {
    data,
    header,
    name,
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    listPlanets,
    setListPlanets,
    filterByNumericValues,
    setfilterByNumericValues,
  };

  return (
    <MyContext.Provider value={ elements }>
      {children}
    </MyContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
// referência aluna Marilia
// auxilio Guilherme
