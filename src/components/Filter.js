import React from 'react';
import PropTypes from 'prop-types';

function Filter({ column, comparison, value }) {
  return (
    <div>
      <span>{`Column: ${column} - ` }</span>
      <span>{`Comparison: ${comparison} - ` }</span>
      <span>{`Value: ${value}` }</span>
      <button data-testid="filter" type="button">x</button>
    </div>
  );
}

Filter.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
