import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsApi = () => fetch(PLANETS_API)
    .then((response) => response.json());

  useEffect(() => {
    const retrievePlanets = async () => {
      const { results } = await getPlanetsApi();
      setData(results);
    };
    retrievePlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
