import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlanetsContext } from '../../contexts/PlanetsContext';

function FilterApplied({
  column: columnSelected,
  comparison: comparisonSelected,
  value: valueSelected,
}) {
  const { removeFilter } = useContext(PlanetsContext);
  return (
    <form data-testid="filter">
      <select disabled>
        <option value={ columnSelected }>
          {columnSelected}
        </option>
      </select>
      <select disabled>
        <option value={ comparisonSelected }>
          { comparisonSelected }
        </option>
      </select>
      <input
        type="number"
        value={ valueSelected }
        disabled
      />
      <button type="button" onClick={ () => removeFilter(columnSelected) }>X</button>
    </form>
  );
}

FilterApplied.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterApplied;
