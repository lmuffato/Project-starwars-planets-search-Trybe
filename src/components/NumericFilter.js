import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import starwarsContext from '../context/starwarsContext';

export default function NumericFilter() {
  const [filtersInputs, setFiltersInput] = useState({
    columnInput: '',
    comparisonInput: 'maior que',
    valueInput: 0,
  });
  const { filters, setFilters } = useContext(starwarsContext);
  const { filterByNumericValues } = filters;

  const handleChange = ({ target }) => {
    setFiltersInput({ ...filtersInputs, [target.name]: target.value });
  };

  const availableOptions = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const opUsadas = filterByNumericValues.map(
      (filter) => filter.column,
    ).filter((_, index) => index < filterByNumericValues.length);

    return options.filter(
      (option) => !opUsadas.some((usedOption) => usedOption === option),
    );
  };

  const handleClick = () => {
    console.log(filterByNumericValues.length);
    if (filterByNumericValues.length === 0) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          {
            column: filtersInputs.columnInput || availableOptions()[0],
            comparison: filtersInputs.comparisonInput,
            value: filtersInputs.valueInput,
          },
        ],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: filters.filterByNumericValues.concat({
          column: filtersInputs.columnInput || availableOptions()[0],
          comparison: filtersInputs.comparisonInput,
          value: filtersInputs.valueInput,
        }),
      });
    }
  };

  const renderOptions = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'
    ];

    if (filterByNumericValues.length === 0) {
      return (
        options.map(
          (option, index) => <option key={ index } value={ option }>{option}</option>,
        )
      );
    }

    return (
      availableOptions().map(
        (option, index) => <option key={ index } value={ option }>{option}</option>,
      )
    );
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Parâmetro:
        <select
          data-testid="column-filter"
          id="column-filter"
          name="columnInput"
          value={ filtersInputs.columnInput }
          onChange={ (e) => handleChange(e) }
        >
          {renderOptions()}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Comparação:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonInput"
          value={ filtersInputs.comparisonInput }
          onChange={ (e) => handleChange(e) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          name="valueInput"
          value={ filtersInputs.valueInput }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </div>
  );
}

/* NumericFilter.propTypes = {
  id: PropTypes.number.isRequired,
}; */
