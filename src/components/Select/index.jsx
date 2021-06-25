import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import starWarsPlanets from '../../context';

function Select({ selectData }) {
  const { setFilters, filters } = useContext(starWarsPlanets);
  const { testeId, options, tagName } = selectData;

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, [name]: value,
      },
    });
  };

  return (
    <select
      onChange={ handleChange }
      data-testid={ testeId }
      name={ tagName }
    >
      { options.map((optionText) => (
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
};

export default Select;
