import React, { useContext } from 'react';
import PropTypes, { string, func, arrayOf } from 'prop-types';

import Option from './components/Option';

import styles from './select.module.css';

class Select extends React.Component {
  render() {
    const {
      dataTestid,
      name,
      options,
      value,
      filterDispatch,
    } = this.props;

    return (
      <label htmlFor={ name } className={ styles.selectBox }>
        <select
          className={ styles.selectField }
          data-testid={ dataTestid }
          id={ name }
          name={ name }
          value={ value }
          onChange={ ({ target: { value: theValue } }) => (
            filterDispatch({ type: name, payload: theValue })
          ) }
        >
          {options.map((option) => <Option key={ option.value } { ...option } />)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataTestid: string.isRequired,
  name: string.isRequired,
  options: arrayOf(PropTypes.object).isRequired,
  value: string.isRequired,
  filterDispatch: func.isRequired,
};

export default Select;
