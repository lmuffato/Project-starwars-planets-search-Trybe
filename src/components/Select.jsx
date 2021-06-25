import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, dataTestid, placeholder, onChange, name }) {
  return (
    <select
      data-testid={ dataTestid }
      placeholder={ placeholder }
      onChange={ onChange }
      name={ name }
    >
      {options.map((option, index) => (
        <option value={ option.value || option } key={ `${option} ${index}` }>
          {option.label || option }
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
