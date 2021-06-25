import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      const headerNames = Object.keys(results[0]);
      const headerItems = headerNames.filter((head) => head !== 'residents');
      const planets = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(planets);
      setHeader(headerItems);
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    header,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
