import React from 'react';
import DropdownFilter from './DropdownFilter';
import Comparefilter from './CompareFilter';
import Numberfilter from './NumberFIlter';

function Allfilters() {
  return (
    <div>
      <DropdownFilter />
      <Comparefilter />
      <Numberfilter />
      <button type="button" data-testid="button-filter">Filtrar...</button>

    </div>
  );
}

export default Allfilters;
