import React from 'react';
import PropTypes from 'prop-types';

export default function FilterText(props) {
  const { title, name, value, handleName } = props;
  return (
    <label htmlFor="name">
      { title }
      <input
        type="text"
        id={ name }
        data-testid={ `${name}-filter` }
        value={ value }
        onChange={ handleName }
      />
    </label>
  );
}

FilterText.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleName: PropTypes.func,
};

FilterText.defaultProps = {
  title: '',
  name: '',
  value: '',
  handleName: () => { console.log('Not function found'); },
};
