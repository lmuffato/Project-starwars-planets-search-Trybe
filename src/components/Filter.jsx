import React, { useContext, useEffect, useState } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

function Filter() {
  const { data, setFilteredValues } = useContext(PlanetsContext);
  const { filters, setFilters } = useContext(FiltersContext);
  const { filterByName = { name: '' }, filterByNumericValues = [] } = filters;
  const [numericFilters, setNumericFilters] = useState([]);
  const [applyedFilters, setApplyedFilters] = useState([]);
  const [numericValueFilter, setNumericValueFilter] = useState({});
  const [applyFilters, setApplyFilters] = useState(false);
  const COLUMN_FILTERS = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const NUMERIC_VALUES_LENGTH = 3;

  useEffect(() => setNumericFilters(
    COLUMN_FILTERS,
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
    if (Object.keys(numericValueFilter).length === NUMERIC_VALUES_LENGTH) {
      const usedFilterIndex = numericFilters.indexOf(numericValueFilter.column);
      setApplyedFilters([...applyedFilters, numericValueFilter.column]);
      setNumericFilters([...numericFilters.slice(0, usedFilterIndex),
        ...numericFilters.slice(usedFilterIndex + 1)]);
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          numericValueFilter,
        ],
      });
      setNumericValueFilter({});
      setApplyFilters(!applyFilters);
    }

    // applyFiltersByNumericValue();
    // setApplyFilters(true);
  }

  useEffect(() => {
    const filteredColumns = COLUMN_FILTERS
      .filter((column) => !applyedFilters.includes(column));
    setNumericFilters(filteredColumns);
  }, [applyedFilters]);

  function removeFilter(filter, index) {
    const numericValuesIndex = filterByNumericValues
      .findIndex((numericFilter) => numericFilter.column === filter);
    const filterByNumericValuesChanged = [...filterByNumericValues
      .slice(0, numericValuesIndex), ...filterByNumericValues
      .slice(numericValuesIndex + 1)];
    setApplyedFilters([...applyedFilters
      .slice(0, index), ...applyedFilters.slice(index + 1)]);
    setFilters({
      ...filters,
      filterByNumericValues:
        filterByNumericValuesChanged,
    });
    setApplyFilters(!applyFilters);
  }

  function renderApplyedFilters() {
    return (
      <div data-testid="filter">
        {applyedFilters.map((filter, index) => filter && (
          <>
            <button
              key={ `${filter}-${index}` }
              type="button"
              onClick={ () => removeFilter(filter, index) }
            >
              x
            </button>
            {filter}
          </>
        ))}
      </div>
    );
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
      {applyedFilters && renderApplyedFilters()}
    </form>
  );
}

export default Filter;
