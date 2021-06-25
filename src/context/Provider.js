import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import fetchPlanets from '../services/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const edpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await edpoint.json();
      const { results } = response;
      setPlanets(results);
      console.log(results);
    };
    fetchPlanets();
  }, []);

  const context = { planets };
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
