import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SelectFilter() {
  const [heading, setHeading] = useState('population');
  const [size, setSize] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  const [sendInfo, setSendInfo] = useState(false);
  const { setNumericValuesFilter, setCanFilter } = useContext(PlanetsContext);

  useEffect(() => {
    if (sendInfo) {
      setNumericValuesFilter(heading, size, numberFilter);
      setCanFilter(true);
      setSendInfo(false);
    }
  }, [sendInfo]);

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ heading }
        onChange={ ({ target }) => setHeading(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ size }
        onChange={ ({ target }) => setSize(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberFilter }
        onChange={ ({ target }) => setNumberFilter(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setSendInfo(true) }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default SelectFilter;
