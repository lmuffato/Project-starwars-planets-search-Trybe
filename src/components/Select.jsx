import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, dataTestid, placeholder }) {
  return (
    <select data-testid={ dataTestid } placeholder={ placeholder }>
      {options.map((option, index) => (
        <option value={ option.value } key={ `${option} ${index}` }>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  dataTestid: PropTypes.string,
}.isRequired;

export default Select;

// https://www.w3docs.com/learn-html/html-select-tag.html
