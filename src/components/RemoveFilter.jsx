import React from 'react';
import PropTypes from 'prop-types';
import usePlanets from '../hooks/usePlanets';
import useFilter from '../hooks/useFilter';

function RemoveFilter({ id }) {
  const filterValues = Object.values(id);
  const {
    filters: { filters, setFilters },
    data: { planetasIniciais, setPlanets },
  } = usePlanets();
  const { categories, setDropdown } = useFilter();

  function handleRemoveFilter() {
    const { filterByNumbers } = filters;
    const newFilters = filterByNumbers
      .filter((object) => Object.values(object)
        .some((value, index) => value !== filterValues[index]));

    setFilters({ ...filters,
      filterByNumbers: newFilters,
    });

    if (newFilters.length === 0) {
      setPlanets(planetasIniciais);
      setDropdown(categories);
    } else {
      const categories2 = [];
      newFilters.forEach(({ comparisonFilter, columnFilter, inputFilter }) => {
        categories2.push(columnFilter);
        const filteredPlanets = planetasIniciais.filter((planet) => {
          if (comparisonFilter === 'maior que') {
            return (planet[columnFilter]) > Number(inputFilter);
          }
          if (comparisonFilter === 'menor que') {
            return (planet[columnFilter]) < Number(inputFilter);
          }
          return planet[columnFilter] === inputFilter;
        });
        setPlanets(filteredPlanets);
        const newCategories = categories.reduce((acc, curr, index) => {
          if (curr === categories2[index]) {
            return acc;
          }
          return [...acc, curr];
        }, []);
        setDropdown(newCategories);
      });
    }
  }

  return (

    <button
      type="button"
      onClick={ handleRemoveFilter }
    >
      X
    </button>

  );
}

export default RemoveFilter;

RemoveFilter.propTypes = {
  id: PropTypes.shape = {
    columnFilter: PropTypes.string,
    comparisonFilter: PropTypes.string,
    inputFilter: PropTypes.number,
  },
}.isRequired;
