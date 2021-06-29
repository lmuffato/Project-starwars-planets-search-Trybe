import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';
import DropdownFilter from './DropdownFilter';
import Comparefilter from './CompareFilter';
import Numberfilter from './NumberFIlter';

function Allfilters() {
  const { handleSubmitFilter } = useContext(planetsContext);
  return (
    <div>
      <DropdownFilter />
      <Comparefilter />
      <Numberfilter />
      <button
        type="button"
        onClick={ handleSubmitFilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Allfilters;
