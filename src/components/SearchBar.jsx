import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchBar() {
  const {
    handleInputFilter,
    handleSelectedFilters,
    filters,
    handleDeleteFilter } = useContext(PlanetsContext);
  const [inputName, setInputName] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedComparison, setSelectedComparison] = useState('');
  const [inputValue, setInputValue] = useState(0);
  const [buttonControl, setButtonControl] = useState(true);
  const [valueSelect, setValueSelect] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [columnSort, setColumnSort] = useState(['name']);
  const [typeSort, setTypeSort] = useState('ASC');
  const handleChange = (e) => {
    e.preventDefault();
    const { target: { name, value } } = e;
    switch (name) {
    case 'column-filter':
      return setSelectedColumn(value);
    case 'comparison-filter':
      return setSelectedComparison(value);
    case 'value-filter':
      return (setInputValue(value), setButtonControl(false));
    default:
      return setInputName(value);
    }
  };

  useEffect(() => {
    handleInputFilter(inputName);
  });

  const setFiltersGlobal = (e) => {
    e.preventDefault();
    const actualFilter = {
      column: selectedColumn,
      comparison: selectedComparison,
      value: inputValue,
    };

    handleSelectedFilters(actualFilter);
  };

  const handleSortInput = (e) => {
    const { target: { name, value } } = e;
    if (name === 'column-sort') {
      return setColumnSort(value);
    }
    if (name === 'order') {
      return setTypeSort(value);
    }
  };

  const selectValues = ({ filterByNumericValues }) => {
    const pattern = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const actualFilters = filterByNumericValues.map((filter) => filter.column);
    const filteredSelects = pattern
      .filter((select) => !actualFilters.includes(select));
    setCurrentFilters(actualFilters);
    return setValueSelect(filteredSelects);
  };

  useEffect(() => {
    selectValues(filters);
  }, [filters]);

  const deleteFilter = ({ target: name }) => {
    handleDeleteFilter(name);
  };

  return (
    <>
      <fieldset>
        <h3>Your planet here you will you find!</h3>
        <label htmlFor="filterName">
          Filter by name:
          {' '}
          <input
            id="filterName"
            type="text"
            name="inputName"
            data-testid="name-filter"
            onChange={ (e) => handleChange(e) }
            value={ inputName }
          />
        </label>
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ (e) => handleChange(e) }
          // defaultValue="select"
        >
          {/* <option value="select" disabled>filtrar por</option> */}
          {valueSelect.map((each) => (
            <option key={ each } value={ each }>{each}</option>
          ))}
        </select>
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => handleChange(e) }
          defaultValue=""
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <label htmlFor="value-filter">
          <input
            placeholder="insira valor numérico"
            name="value-filter"
            type="number"
            id="value-filter"
            data-testid="value-filter"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ (e) => setFiltersGlobal(e) }
          disabled={ buttonControl }
        >
          Filtrar
        </button>
      </fieldset>
      <fieldset>
        <select
          name="column-sort"
          data-testid="column-sort"
          onChange={ (e) => handleSortInput(e) }
        >
          <option value="name">name</option>
          <option value="orbital_period">orbital_period</option>
        </select>
        <label htmlFor="ASC">
          Ascendente
          <input
            onChange={ (e) => handleSortInput(e) }
            type="radio"
            name="order"
            value="ASC"
            id="ASC"
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="DESC">
          Descendente
          <input
            onChange={ (e) => handleSortInput(e) }
            type="radio"
            name="order"
            value="DESC"
            id="DESC"
            data-testid="column-sort-input-desc"
          />
        </label>
        <button type="submit" data-testid="column-sort-button">Ordenar</button>
      </fieldset>
      {currentFilters.length > 0 ? currentFilters.map((each) => (
        <div data-testid="filter" key={ each }>
          { each }
          <button
            name={ each }
            type="submit"
            onClick={ (e) => deleteFilter(e) }
          >
            X
          </button>
        </div>
      ))
        : null }
    </>

  );
}

export default SearchBar;
