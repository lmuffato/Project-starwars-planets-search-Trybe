import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import dataAPI from '../services/planetsAPI';

const state = { filters: {
  filterByName: {
    name: '',
  },
},
};

function Provider({ children }) {
  const [dataPlanets, setData] = useState([]);
  const [filters, setFilters] = useState(state);
  const [filteredPlanet, setFiltered] = useState([]);

  useEffect(() => {
    dataAPI().then(({ results }) => setData(results));
  }, []);

  useEffect(() => {
    const result = dataPlanets.filter((planet) => {
      const { name } = filters.filters.filterByName;
      return planet.name.includes(name);
    });
    setFiltered(result);
  }, [dataPlanets, filters]);

  const handleNameFilter = (value) => {
    setFilters({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  const contextValue = {
    dataPlanets,
    setData,
    filters,
    setFilters,
    filteredPlanet,
    setFiltered,
    handleNameFilter,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// Explicação e orientação sobre refatoração do Provider para corrigir a forma de usar estados do Guilherme Dornelles - Turma 10A
