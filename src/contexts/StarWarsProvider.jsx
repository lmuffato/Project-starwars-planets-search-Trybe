import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/serviceAPI';

const StarWarsContext = createContext();
const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filtersByNumericValues, setFiltersByNumericValues] = useState([]);
  const [unavailableFilters, setUnavailableFilters] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  useEffect(() => {
    fetchPlanets().then((requestPlanets) => {
      requestPlanets.forEach((planet) => delete planet.residents);
      setPlanets([...requestPlanets]);
    });
  }, []);

  const headers = planets[0] || [];

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filtersByNumericValues,
      order,
    },
  };

  const context = {
    planets,
    ...filters,
    unavailableFilters,
    headers,
    setName,
    setFiltersByNumericValues,
    setUnavailableFilters,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};
StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};
export { StarWarsProvider, StarWarsContext };
