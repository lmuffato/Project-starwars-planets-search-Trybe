import React, { createContext, useEffect, useState } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import sortPlanets from '../../helper/sort';
import { fetchPlanets } from '../../services/api';

export const StarWarsContextt = createContext();

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export function StarWarsContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isLoaded, setIsLoaded] = useState(false);

  const removeFilter = (filterCategory) => {
    const newFilter = filter.filterByNumericValues
      .filter(({ category }) => category !== filterCategory);
    setFilter({ ...filter, filterByNumericValues: newFilter });
  };

  useEffect(() => {
    const fetchMount = async () => {
      const filteredPlanets = await fetchPlanets();
      setPlanets(filteredPlanets);
      setIsLoaded(true);
    };

    fetchMount();
  }, []);

  useEffect(() => {
    if (planets.length && isLoaded) {
      const sortedPlanets = sortPlanets(planets, filter.order);
      setPlanets(sortedPlanets);
    }
  }, [filter.order, isLoaded]);

  return (
    <StarWarsContextt.Provider
      value={ { planets, filter, setFilter, removeFilter } }
    >
      {children}
    </StarWarsContextt.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};
