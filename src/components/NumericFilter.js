import React, { useContext, useState } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function NumericFilter() {
  const [filtersInputs, setFiltersInput] = useState({
    columnInput: '',
    comparisonInput: 'maior que',
    valueInput: 0,
  });
  const { filters, setFilters, columns, setColumns } = useContext(starwarsContext);

  const handleChange = ({ target }) => {
    setFiltersInput({ ...filtersInputs, [target.name]: target.value });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: filtersInputs.columnInput || columns[0],
          comparison: filtersInputs.comparisonInput,
          value: filtersInputs.valueInput,
        },
      ],
    });
    const availableColumns = columns.filter(
      (column) => (filtersInputs.columnInput
        ? column !== filtersInputs.columnInput
        : column !== columns[0]),
    );

    setColumns(availableColumns);
  };

  const renderOptions = () => columns.map(
    (column, index) => (
      <option
        key={ index }
        value={ column }
      >
        { column }
      </option>
    ),
  );

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
