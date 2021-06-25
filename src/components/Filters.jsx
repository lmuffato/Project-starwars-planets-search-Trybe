import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import { columnArray, comparisonArray } from '../services/options';

function Filters() {
  const { filters: {
    filtersValue, filterByNumericValues, setFiltersByNumericValues,
  } } = useContext(Context);

  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
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
    filtersValue(filters);
    setFiltersByNumericValues([...filterByNumericValues, { ...filters }]);
  };

  console.log(filterByNumericValues);
  const columnFilters = filterByNumericValues.map((filter) => filter.column);
  const comparisonFilters = filterByNumericValues.map((filter) => filter.comparison);

  return (
    <div>
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
    </div>
  );
}

export default Filters;
