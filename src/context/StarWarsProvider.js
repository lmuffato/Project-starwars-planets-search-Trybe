import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const INITIAL_FILTER = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: { column: 'Name', sort: 'ASC' },
    },
  };

  const [originalPlanets, setOriginalPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  /* function sortPlanets(planets) {
    const NEGATIVE = -1;
    const POSITIVE = 1;
    const ZERO = 0;
    planets.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      if (textA < textB) return NEGATIVE;
      if (textA > textB) return POSITIVE;
      return ZERO;
    });
    return planets;
  } */

  function sortNewOrder(planets, orderColumn, typeSort) {
    console.log('Entrei no sortNewOrder');
    const NEGATIVE = -1;
    const POSITIVE = 1;
    const ZERO = 0;
    if (orderColumn === 'Name') {
      console.log('ordenei por nome');
      planets.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textA < textB) return NEGATIVE;
        if (textA > textB) return POSITIVE;
        return ZERO;
      });
      return planets;
    }
    if (typeSort === 'DESC') {
      console.log('entrei no DESC');
      planets.sort((a, b) => b[orderColumn] - a[orderColumn]);
    }
    if (typeSort === 'ASC') {
      console.log('entrei no ASC');
      planets.sort((a, b) => a[orderColumn] - b[orderColumn]);
    }
    console.log(planets);
    return planets;
  }

  async function fetchPlanets() {
    const fetchedPlanets = await getPlanets();
    setOriginalPlanets(fetchedPlanets);
    setFilteredPlanets(
      sortNewOrder(
        fetchedPlanets, filter.filters.order.column, filter.filters.order.sort,
      ),
    );
    setLoaded(true);
  }

  useEffect(() => {
    console.log('entrei no useEffect do fetch');
    fetchPlanets();
  }, []);

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    if (filter.filters.filterByName !== '') {
      setFilteredPlanets(originalPlanets.filter((planet) => planet.name.includes(name)));
    }
  }, [filter]);

  useEffect(() => {
    const { filters: { filterByNumericValues } } = filter;
    if (filter.filters.filterByNumericValues.length !== 0) {
      const {
        column, comparison, value,
      } = filterByNumericValues[(filterByNumericValues.length - 1)];
      const valueToInt = parseInt(value, 16);
      if (comparison === 'maior que') {
        setFilteredPlanets(
          originalPlanets.filter((planet) => parseInt(planet[column], 16) > valueToInt),
        );
      }
      if (comparison === 'menor que') {
        setFilteredPlanets(originalPlanets.filter(
          (planet) => (parseInt(planet[column], 16) < valueToInt),
        ));
      }
      if (comparison === 'igual a') {
        setFilteredPlanets(
          originalPlanets.filter((planet) => parseInt(planet[column], 16) === valueToInt),
        );
      }
    }
  }, [filter]);

  useEffect(() => {
    const { filters: { order: { column, sort } } } = filter;
    if (column !== 'Name') {
      console.log('passei pelo if do column');
      setFilteredPlanets(sortNewOrder(originalPlanets, column, sort));
    }
  }, [filter]);

  const consumer = {
    filteredPlanets,
    setFilteredPlanets,
    loaded,
    filter,
    setFilter,
    sortNewOrder,
  };

  return (
    <StarWarsContext.Provider value={ { ...consumer } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: element.isRequired,
};

export default StarWarsProvider;
