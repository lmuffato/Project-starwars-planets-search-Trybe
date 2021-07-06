import React, { useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';

function InputTextFilter() {
  // const [columnFilter, setColumnFilter] = useState('population');
  // const [comparisonFilter, setComparisonFilter] = useState('maior que');
  // const [valueFilter, setValueFilter] = useState(0);

  const {
    filterByName, setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    // // filters,
    // setFilters,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,

    applyFilter,

  } = useContext(PlanetContext);

  useEffect(() => {
  }, [filterByNumericValues]);

  const usedOptions = filterByNumericValues.map(({ column }) => column);
  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const disponibleOptionsFunc = () => {
    const disponibleOptions = options.filter((option) => !usedOptions.includes(option));
    return disponibleOptions
      .map((option) => (
        <option key={ option } value={ option }>{option}</option>
      ));
  };

  const removeFilters = () => {
    setFilterByNumericValues(['']);
  };

  return (
    <span>
      <span data-testid="filter">
        <h1>{filterByName}</h1>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ (event) => setFilterByName(event.target.value) }
        />
        <button type="button" onClick={ removeFilters }>X</button>
      </span>
      <span data-testid="filter">
        <label htmlFor="column-filter">
          Filter for column
          <select
            id="column-filter"
            data-testid="column-filter"
            name="column-filter"
            value={ columnFilter }
            onChange={ (event) => setColumnFilter(event.target.value) }
          >
            {disponibleOptionsFunc()}
          </select>
        </label>
        <button type="button" onClick={ removeFilters }>X</button>
      </span>
      <span data-testid="filter">
        <label htmlFor="comparison-filter">
          Comparison Filter
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
            name="comparison-filter"
            value={ comparisonFilter }
            onChange={ (event) => setComparisonFilter(event.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <button type="button" onClick={ removeFilters }>X</button>
      </span>
      <span data-testid="filter">
        <label htmlFor="value-filter">
          Value filter
          <input
            id="value-filter"
            data-testid="value-filter"
            type="number"
            value={ valueFilter }
            onChange={ (event) => setValueFilter(event.target.value) }
          />
        </label>
        <button type="button" onClick={ removeFilters }>X</button>
      </span>
      <div>
        <button
          id="button-filter"
          type="button"
          data-testid="button-filter"
          onClick={ applyFilter }
        >
          Aplicar filtos
        </button>
      </div>
    </span>
  );
}

export default InputTextFilter;
