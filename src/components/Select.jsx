import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Select({ placeholder, options, defaultOption }) {
  return (
    <Dropdown
      options={ options }
      value={ defaultOption }
      placeholder={ placeholder }
    />
  );
}

Select.defaultProps = {
  defaultOption: '',
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string,
};

export default Select;
