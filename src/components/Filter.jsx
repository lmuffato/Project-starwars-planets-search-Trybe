import React, { useContext } from 'react';
import context from '../context/context';

function Filter() {
  const { data, setFilterData,
    numFilter, filterData, setNumFilter } = useContext(context);

  const filterPlanetByName = (value) => {
    const planet2Render = data.filter(({ name }) => name.includes(value));
    setFilterData(planet2Render);
  };

  const filterPlanetsByNum = () => {
    const { comparison, column, value } = numFilter;
    filterPlanetByName('');
    let toSee = [];
    if (comparison === 'maior que') {
      toSee = filterData.filter((planet) => parseFloat(planet[column])
        > parseFloat(value));
      setFilterData(toSee);
    }
    if (comparison === 'menor que') {
      toSee = filterData.filter((planet) => parseFloat(planet[column])
        < parseFloat(value));
      setFilterData(toSee);
    }
    if (comparison === 'igual a') {
      toSee = filterData.filter((planet) => parseFloat(planet[column])
        === parseFloat(value));
      setFilterData(toSee);
    }
  };

  const handleValue = (filter, value) => {
    setNumFilter({ ...numFilter, [filter]: value });
  };

  const renderColumFilter = () => (
    <select
      data-testid="column-filter"
      id="colum-filter"
      onChange={ ({ target: { value } }) => handleValue('column', value) }
    >
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );

  const renderComparFilter = () => (
    <select
      data-testid="comparison-filter"
      id="compar-filter"
      onChange={ ({ target: { value } }) => handleValue('comparison', value) }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );

  const renderValueFilter = () => (
    <input
      id="numericFilter"
      type="number"
      data-testid="value-filter"
      onChange={ ({ target: { value } }) => handleValue('value', value) }
    />
  );

  const renderButton = () => (
    <button
      data-testid="button-filter"
      onClick={ () => filterPlanetsByNum() }
      type="button"
    >
      Ativar Filtro
    </button>
  );

  const renderNameFilter = () => (
    <label htmlFor="filter">
      Filter:
      <input
        id="filter"
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => filterPlanetByName(value) }
      />
    </label>
  );

  const renderNumFilter = () => (
    <form>
      <fieldset>
        { renderColumFilter() }
        { renderComparFilter() }
        { renderValueFilter() }
        { renderButton() }
      </fieldset>
    </form>
  );

  return (
    <div>
      { renderNameFilter() }
      { renderNumFilter() }
    </div>
  );
}

export default Filter;
