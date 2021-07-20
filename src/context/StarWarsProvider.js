import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsData from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const numbKeys = ['diameter',
    'orbital_period', 'rotation_period', 'surface_water', 'population'];
  const [planets, setPlanets] = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);
  const [TableThs, setTableThs] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  const A_NEGATIVE = -1;
  const reorderASC = (toOrder) => {
    if (numbKeys.includes(filters.order.column)) {
      toOrder.sort((a, b) => a[filters.order.column] - b[filters.order.column]);
    } else {
      toOrder.sort((a, b) => {
        if (a[filters.order.column] > b[filters.order.column]) return 1;
        if (a[filters.order.column] < b[filters.order.column]) return A_NEGATIVE;
        return 0;
      });
    }
  };

  const orderPlanets = (toOrder) => {
    if (filters.order.sort === 'ASC') {
      reorderASC(toOrder);
    } else if (numbKeys.includes(filters.order.column)) {
      toOrder.sort((a, b) => b[filters.order.column] - a[filters.order.column]);
    } else {
      toOrder.sort((a, b) => {
        if (a[filters.order.column] < b[filters.order.column]) return 1;
        if (a[filters.order.column] > b[filters.order.column]) return A_NEGATIVE;
        return 0;
      });
    }
    setPlanets([...toOrder]);
  };

  const getPlanets = async () => {
    if (allPlanets.length === 0) {
      const { results } = await planetsData();
      orderPlanets(results);
      setAllPlanets([...results]);
      setTableThs(Object.keys(results[0]).filter((e) => e !== 'residents'));
    } else {
      orderPlanets([...allPlanets]);
    }
  };

  useEffect(() => {
    if (!filters.filterByName.name) getPlanets();
    else {
      const filteredPlanets = planets
        .filter(({ name }) => name.toLowerCase().includes(filters.filterByName.name));
      setPlanets(filteredPlanets);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByName]);

  // deixar genérico o operador
  const filterNumMore = (c, v) => planets.filter((p) => Number(p[c]) > Number(v));
  const filterNumLess = (c, v) => planets.filter((p) => Number(p[c]) < Number(v));
  const filterNumequal = (c, v) => planets.filter((p) => Number(p[c]) === Number(v));

  useEffect(() => {
    getPlanets();
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') setPlanets(filterNumMore(column, value));
      if (comparison === 'menor que') setPlanets(filterNumLess(column, value));
      if (comparison === 'igual a') setPlanets(filterNumequal(column, value));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues, filters.order]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        filters,
        TableThs,
        setFilters,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
