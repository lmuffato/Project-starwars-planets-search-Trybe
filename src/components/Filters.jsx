import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import { columnArray, comparisonArray } from '../services/options';

function Filters() {
  const { data: {
    setPlanetList, backupPlanetList,
  }, filters: {
    filtersValue, filterByNumericValues, setFiltersByNumericValues,
  } } = useContext(Context);

  const [filters, setFilters] = useState({
    column: null,
    comparison: null,
    value: null,
  });

  const handleFilters = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    const resetFiltersValues = {
      column: null,
      comparison: null,
      value: null,
    };
    const { column, comparison, value } = filters;
    if (column && comparison && value) {
      filtersValue(filters);
      setFiltersByNumericValues([...filterByNumericValues, { ...filters }]);
      setFilters(resetFiltersValues);
    }
  };

  const removeFilter = (e) => {
    const { target: { name } } = e;
    e.preventDefault();
    const resetFilters = filterByNumericValues.filter((filter) => filter.column !== name);
    console.log(resetFilters);
    setFiltersByNumericValues(resetFilters);
    return setPlanetList(backupPlanetList);
  };

  const renderFilters = () => filterByNumericValues.map((currFilter, index) => (
    <div key={ index } data-testid="filter">
      <p>{currFilter.column}</p>
      <p>{currFilter.comparison}</p>
      <p>{currFilter.value}</p>
      <button
        type="button"
        name={ currFilter.column }
        onClick={ removeFilter }
      >
        X
      </button>
    </div>
  ));

  console.log(filterByNumericValues);
  const columnFilters = filterByNumericValues.map((filter) => filter.column);
  const comparisonFilters = filterByNumericValues.map((filter) => filter.comparison);

  return (
    <>
      <section>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleFilters }
          required
        >
          {columnArray.filter((column) => !columnFilters.includes(column))
            .map((col, index) => (
              <option key={ index }>{col}</option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleFilters }
          required
        >
          {comparisonArray.filter((comparison) => !comparisonFilters.includes(comparison))
            .map((compar, index) => (
              <option key={ index }>{compar}</option>
            ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleFilters }
          required
        />
        <button
          type="button"
          onClick={ handleSubmitFilter }
          data-testid="button-filter"
        >
          Add filter
        </button>
      </section>
      <section>
        {filterByNumericValues.lenght !== 0 ? renderFilters() : false}
      </section>
    </>
  );
}

export default Filters;
