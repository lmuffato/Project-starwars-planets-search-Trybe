import React, { useContext, useState, useReducer } from 'react';

import Context from '../../../../context/Context';

import Select from '../../../../components/Select';
import { selects, selectReducer } from '../../../../helpers/selectData';

function Filter() {
  const { filters, setFilters } = useContext(Context);
  const [name, setName] = useState('');
  const [filterState, filterDispatch] = useReducer(selectReducer, {
    column: 'population',
    comparison: 'more',
    findByValue: '',
  });

  const handleName = ({ target: { value } }) => {
    setName(value);
    setFilters(({ filters: prev }) => ({
      filters: {
        ...prev,
        filterByName: { name: value },
      },
    }));
  };

  const handleFilter = (event) => {
    event.preventDefault();
    setFilters(({ filters: prev }) => {
      const { filterByNumericValues: numericValues } = prev;
      return {
        filters: {
          ...prev,
          filterByNumericValues: numericValues.concat(filterState),
        },
      };
    });
  };

  const filterOptions = (options) => {
    const { filters: { filterByNumericValues } } = filters;
    const newOptions = options.filter(({ value }) => (
      filterByNumericValues.every(({ column }) => value !== column)
    ));

    return newOptions;
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        name="findByName"
        value={ name }
        onChange={ handleName }
      />

      {
        selects.map((select) => {
          const options = filterOptions(select.options);
          return (
            <Select
              { ...select }
              key={ select.name }
              filterDispatch={ filterDispatch }
              value={ filterState[select.name] }
              options={ options }
            />
          );
        })
      }

      <input
        data-testid="value-filter"
        type="text"
        name="findByValue"
        value={ filterState.findByValue }
        onChange={ ({ target: { value } }) => (
          filterDispatch({ type: 'findByValue', payload: value })
        ) }
      />

      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleFilter }
      >
        Filter
      </button>
    </form>
  );
}

export default Filter;
