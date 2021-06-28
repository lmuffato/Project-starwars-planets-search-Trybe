import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../../context/PlanetsContext';

export default function FilterSelect(props) {
  const { setApplyFilter } = useContext(PlanetContext);
  const { name, values, handleSelectValue } = props;
  return (
    <select
      name={ name }
      id=""
      data-testid={ `${name}-filter` }
      onChange={ (e) => {
        handleSelectValue(e);
        setApplyFilter(false);
      } }
    >
      {
        values.map((value, id) => (
          <option
            value={ value }
            key={ id }
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
