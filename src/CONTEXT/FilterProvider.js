import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import MyContext from './DataContext';

function FilterProvider({ children }) {
  const contextData = useContext(MyContext);
  const { data, filtered, setFiltered } = contextData;

  const [planetName, setPlanetName] = useState('');
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState();

  const [optionsColumn, setOptionsColumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filter, setFilter] = useState({ filters: {
    filterByName: {
      name: { planetName } },
    filterByNumericValues: [],
  } });

  function comparationFunction(planetSearch) {
    let ultimateFilter = data;
    if (planetSearch !== '') {
      ultimateFilter = data.filter((planet) => (
        planet.name.toLowerCase().includes(planetSearch)));
    }
    const { filterByNumericValues } = filter.filters;
    filterByNumericValues.forEach((fils) => {
      if (fils.comparison === 'maior que') {
        ultimateFilter = ultimateFilter.filter((planet) => (
          Number(planet[fils.column]) > Number(fils.value)
        ));
      } else if (fils.comparison === 'menor que') {
        ultimateFilter = ultimateFilter.filter((planet) => (
          (Number(planet[fils.column]) < Number(fils.value))
        ));
      } else if (fils.comparison === 'igual a') {
        ultimateFilter = ultimateFilter.filter((planet) => (
          Number(planet[fils.column]) === Number(fils.value)
        ));
      }
    });
    return ultimateFilter;
  }

  useEffect(() => {
    const { filterByNumericValues } = filter.filters;
    const planetSearch = planetName.toLowerCase();
    if (planetSearch === '' && filterByNumericValues === []) {
      setFiltered(data);
    } else if (planetSearch !== '' && filterByNumericValues === []) {
      const setData = data.filter((planet) => (
        planet.name.toLowerCase().includes(planetSearch)));
      setFiltered(setData);
    } else if (filterByNumericValues !== []) {
      setFiltered(comparationFunction(planetSearch));
    }
  }, [data, filter, planetName, setFiltered]);

  const contextFilter = {
    planetName,
    setPlanetName,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
    optionsColumn,
    setOptionsColumn,
    filtered,
    setFiltered,
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={ contextFilter }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
