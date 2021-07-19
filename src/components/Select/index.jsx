import React from 'react';
import PropTypes from 'prop-types';

function Select({ selectData, onChange, value }) {
  const { testeId, options, tagName } = selectData;

  return (
    <select
      onChange={ onChange }
      data-testid={ testeId }
      name={ tagName }
      value={ value }
    >
      {options.map((optionText) => (
        <option
          key={ optionText }
        >
          {optionText}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  selectData: PropTypes.shape({
    testeId: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    tagName: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
