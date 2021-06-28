import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../../context/PlanetsContext';

export default function FilterNumber(props) {
  const { setApplyFilter } = useContext(PlanetContext);
  const { title, name, value, handleValue } = props;
  return (
    <label htmlFor={ name }>
      { title }
      <input
        name={ name }
        type="number"
        id={ name }
        data-testid={ `${name}-filter` }
        value={ value }
        onChange={ (e) => {
          handleValue(e);
          setApplyFilter(false);
        } }
      />
    </label>
  );
}

FilterNumber.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
