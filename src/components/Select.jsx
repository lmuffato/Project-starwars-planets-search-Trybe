import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ handle, array, filter, id, name }) => (
  <select
    data-testid={ id }
    name={ name }
    onChange={ handle }
    required
  >
    {array.filter((column) => !filter.includes(column))
      .map((col, index) => (
        <option key={ index }>{col}</option>
      ))}
  </select>
);

Select.propTypes = {
  handle: PropTypes.func,
  array: PropTypes.array,
  filter: PropTypes.filter,
  id: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Select;
