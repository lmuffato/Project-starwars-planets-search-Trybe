import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumFiltersUtilizeds from '../services/NumFiltersUtilizeds';

function NumericFilters() {
  const { getNumericFilters, showColumnFilter } = useContext(StarWarsContext);
  const [stateClicked, setStateClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [columFilter, setColumFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [populationOption, setpopulationOption] = useState(
    <option id="population" value="population">population</option>,
  );
  const [orbitalPeriodOprion, setOrbitalPeriodOption] = useState(
    <option id="orbital_period" value="orbital_period">orbital_period</option>,
  );
  const [diameterOption, setDiameterOption] = useState(
    <option id="diameter" value="diameter">diameter</option>,
  );
  const [rotationPeriodOption, setRotationPeriodOption] = useState(
    <option id="rotation_period" value="rotation_period">rotation_period</option>,
  );
  const [surfaceWaterOption, setSurfaceWaterOption] = useState(
    <option id="surface_water" value="surface_water">surface_water</option>,
  );

  function hideOptionsFilter(value) {
    if (value === 'population') setpopulationOption('');
    if (value === 'orbital_period') setOrbitalPeriodOption('');
    if (value === 'diameter') setDiameterOption('');
    if (value === 'rotation_period') setRotationPeriodOption('');
    if (value === 'surface_water') setSurfaceWaterOption('');
  }

  function showOptionsFilter(value) {
    if (value === 'population') {
      setpopulationOption(
        <option id="population" value="population">population</option>,
      );
    }
    if (value === 'orbital_period') {
      setOrbitalPeriodOption(
        <option id="orbital_period" value="orbital_period">orbital_period</option>,
      );
    }
    if (value === 'diameter') {
      setDiameterOption(
        <option id="diameter" value="diameter">diameter</option>,
      );
    }
    if (value === 'rotation_period') {
      setRotationPeriodOption(
        <option id="rotation_period" value="rotation_period">rotation_period</option>,
      );
    }
    if (value === 'surface_water') {
      setSurfaceWaterOption(
        <option id="surface_water" value="surface_water">surface_water</option>,
      );
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const columnFilterValue = document.getElementById('column-filter').value;
    hideOptionsFilter(columnFilterValue);
    setCount(count + 1);
    const newColumnFilterValue = document.getElementById('column-filter').value;
    setColumFilter(newColumnFilterValue);
    setStateClicked(true);
  }

  useEffect(() => {
    const sendData = () => {
      getNumericFilters(columFilter, comparisonFilter, valueFilter, true);
      setStateClicked(false);
    };
    if (stateClicked) sendData();
  }, [columFilter, comparisonFilter, getNumericFilters, stateClicked, valueFilter]);

  useEffect(() => {
    showOptionsFilter(showColumnFilter);
  }, [showColumnFilter]);

  function handleChange({ target }) {
    const { name, value } = target;
    switch (name) {
    case 'columFilter':
      setColumFilter(value);
      break;
    case 'comparisonFilter':
      setComparisonFilter(value);
      break;
    case 'valueFilter':
      setValueFilter(value);
      break;
    default:
    }
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        id="column-filter"
        onChange={ handleChange }
        name="columFilter"
      >
        { populationOption }
        { orbitalPeriodOprion }
        { diameterOption }
        { rotationPeriodOption }
        { surfaceWaterOption }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChange }
        name="comparisonFilter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
        onChange={ handleChange }
        name="valueFilter"
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        {' '}
        Adicionar Filtro
      </button>

      <h3>Filtros Numéricos Utilizados</h3>
      <NumFiltersUtilizeds />
    </div>
  );
}

export default NumericFilters;
