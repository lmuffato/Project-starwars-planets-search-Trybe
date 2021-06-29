import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../../context/PlanetsContext';

export default function FilterSelect(props) {
  const { name, values, handleSelectValue } = props;
  const { filters: { filterByNumericValues } } = useContext(PlanetContext);
  return (
    <select
      name={ name }
      id=""
      data-testid={ `${name}-filter` }
      onChange={ (e) => {
        handleSelectValue(e);
        // setApplyFilter(false);
      } }
    >
      {
        values.filter((value) => {
          let isValid = true;
          const verify = filterByNumericValues
            .some(({ column }) => value === column);
          isValid = !verify;
          return isValid;
        }).map((value, id) => (
          <option
            value={ value }
            key={ id }
            selected={ id === 0 ? 'selected' : null }
          >
            { value }
          </option>
        ))
      }
    </select>
  );
}

FilterSelect.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleSelectValue: PropTypes.func.isRequired,
};
