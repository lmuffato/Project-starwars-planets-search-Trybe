import React, { useContext, useEffect, useState } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

function Filter() {
  const { data, setFilteredValues } = useContext(PlanetsContext);
  const { filters, setFilters } = useContext(FiltersContext);
  const { filterByName = { name: '' }, filterByNumericValues = [] } = filters;
  const [numericFilters, setNumericFilters] = useState([]);
  const [numericValueFilter, setNumericValueFilter] = useState({});
  const [applyFilters, setApplyFilters] = useState(false);

  useEffect(() => setNumericFilters(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  ), []);

  const filteredByName = (searchTerm = filterByName.name) => (searchTerm !== ''
    ? data.filter((planet) => planet.name.includes(searchTerm))
    : data);

  const verifyAllFilters = (planet) => (
    filterByNumericValues.every(({ column, comparison, value }) => (
      (comparison === 'maior que' && planet[column] > parseInt(value, 10))
        || (comparison === 'menor que' && planet[column] < parseInt(value, 10))
        || (comparison === 'igual a' && planet[column] === value))));

  useEffect(() => (
    setFilteredValues(filteredByName().filter((planet) => verifyAllFilters(planet)))),
  [applyFilters]);

  function handleChangeText({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    setApplyFilters(!applyFilters);
    // setFilteredValues(filteredByName(value));
  }

  function handleChangeNumeric({ target: { name, value } }) {
    // setApplyFilters(false);
    setNumericValueFilter({
      ...numericValueFilter,
      [name]: value,
    });
  }

  function handleClick() {
    const usedFilterIndex = numericFilters.indexOf(numericValueFilter.column);
    setNumericFilters([...numericFilters.slice(0, usedFilterIndex),
      ...numericFilters.slice(usedFilterIndex + 1)]);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        numericValueFilter,
      ],
    });
    setApplyFilters(!applyFilters);
    // applyFiltersByNumericValue();
    // setApplyFilters(true);
  }

  return (
    <form action="">
      <input
        type="text"
        name=""
        id=""
        onChange={ handleChangeText }
        data-testid="name-filter"
      />
      <select
        name="column"
        onChange={ handleChangeNumeric }
        data-testid="column-filter"
      >
        {numericFilters.map((filter, index) => (
          <option key={ `${filter}${index}` }>{filter}</option>
        ))}
      </select>
      <select
        name="comparison"
        onChange={ handleChangeNumeric }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        name="value"
        id=""
        onChange={ handleChangeNumeric }
        data-testid="value-filter"
      />
      <button
        type="button"
        name=""
        id=""
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
