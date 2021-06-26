import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import { columnArray, comparisonArray } from '../services/options';
import Select from './Select';
import Sort from './Sort';

function Filters() {
  const { data: {
    setPlanetList, backupPlanetList, tableHeaders,
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
    setFiltersByNumericValues(resetFilters);
    return setPlanetList(backupPlanetList);
  };

  const renderFilters = () => filterByNumericValues.map((currFilter, index) => (
    <div key={ index } data-testid="filter">
      {Object.values(currFilter).map((curr, i) => (<p key={ i }>{curr}</p>))}
      <button
        type="button"
        name={ currFilter.column }
        onClick={ removeFilter }
      >
        X
      </button>
    </div>
  ));

  const columnFilters = filterByNumericValues.map((filter) => filter.column);
  const comparisonFilters = filterByNumericValues.map((filter) => filter.comparison);

  return (
    <>
      <section>
        <Select
          handle={ handleFilters }
          array={ columnArray }
          filter={ columnFilters }
          name="column"
          id="column-filter"
        />
        <Select
          handle={ handleFilters }
          array={ comparisonArray }
          filter={ comparisonFilters }
          name="comparison"
          id="comparison-filter"
        />
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
      <Sort tableHeaders={ tableHeaders } />
      <section>
        {filterByNumericValues.lenght !== 0 ? renderFilters() : false}
      </section>
    </>
  );
}

export default Filters;
