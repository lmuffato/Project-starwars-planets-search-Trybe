import React, { useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function Filter() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Pesquise pelo nome"
        value={ nameFilter }
        onChange={ (e) => setNameFilter(e.target.value) }
      />
    </div>
  );
}

export default Filter;
