import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState(null);
  const [filter, setFilter] = useState(false);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planetas) => planetas.json());
      const headerNames = Object.keys(results[0]);
      const headerItems = headerNames.filter((head) => head !== 'residents');
      const planetss = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(planetss);
      setHeader(headerItems);
    };
    fetchPlanets();
  }, []);

  return (
    <Context.Provider
      value={
        { planets,
          name,
          setName,
          column,
          setColumn,
          operator,
          setOperator,
          value,
          setValue,
          filter,
          setFilter,
          header,
          setHeader }
      }
    >
      {children}
    </Context.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
