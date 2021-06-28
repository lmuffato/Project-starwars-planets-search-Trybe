import React from 'react';
import PropTypes from 'prop-types';

function FilterApplied({
  column: columnSelected,
  comparison: comparisonSelected,
  value: valueSelected,
}) {
  return (
    <form>
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
    </form>
  );
}

FilterApplied.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterApplied;
