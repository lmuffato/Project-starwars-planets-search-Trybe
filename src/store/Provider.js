import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import starWarsPlanetAPI from '../Service/starWarsPlanetAPI';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    } });
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    filters,
    setFilters,
    planets,
  };

  useEffect(() => {
    const fetchPlanetsAPI = async () => {
      const results = await starWarsPlanetAPI();
      setData(results);
      setPlanets(results);
    };
    fetchPlanetsAPI();
  }, []);

  useEffect(() => {
    const incomingText = filters.filterByName.name;
    const filteredPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(incomingText.toLowerCase()));
    setPlanets(filteredPlanets);
  }, [filters]);

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
