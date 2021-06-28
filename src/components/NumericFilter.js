import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starwarsContext from '../context/starwarsContext';

export default function NumericFilter({ id }) {
  const [filtersInputs, setFiltersInput] = useState({
    columnInput: '', // PENSAR EM OUTRA FORMA DE INICIALIZAÇÃO
    comparisonInput: 'maior que', // PENSAR EM OUTRA FORMA DE INICIALIZAÇÃO
    valueInput: 0,
  });
  const { filters, setFilters, numberOfFilters, setNumberOfFilters, usedOptions, setUsedOptions } = useContext(starwarsContext);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    if (numberOfFilters >= 5) setUsedOptions(true);
  }, [numberOfFilters, setUsedOptions]);

  const handleChange = ({ target }) => {
    setFiltersInput({ ...filtersInputs, [target.name]: target.value });
  };

  const availableOptions = () => {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const opUsadas = filterByNumericValues.map(
      (filter) => filter.column,
    ).filter((_, index) => index < id);
    // aconsole.log(opUsadas);

    return options.filter(
      (option) => !opUsadas.some((usedOption) => usedOption === option),
    );
  };

  const handleClick = () => {
    if (numberOfFilters === 0) {
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
      setNumberOfFilters(numberOfFilters + 1);
    } else {
      // console.log(filters.filterByNumericValues);
      setFilters({
        ...filters,
        filterByNumericValues: filters.filterByNumericValues.concat({
          column: filtersInputs.columnInput || availableOptions()[0],
          comparison: filtersInputs.comparisonInput,
          value: filtersInputs.valueInput,
        }),
      });
    }
    numberOfFilters < 4 ? setNumberOfFilters(numberOfFilters + 1) : setUsedOptions(true);
  };

  const renderOptions = () => {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    /*     const filteredOptions = options.filter(
      (option) => !usedOptions.some((usedOption) => usedOption === option),
    ); */
    if (id === 0) {
      return (
        options.map(
          (option, index) => <option key={ index } value={ option }>{option}</option>,
        )
      );
    }console.log('FILTER NUMERIC', filterByNumericValues);
    // console.log('USED OPTIONS', usedOptions);
    console.log('ID', id);

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
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
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
        Acionar filtro
      </button>
    </div>
  );
}

NumericFilter.propTypes = {
  id: PropTypes.number.isRequired,
};
