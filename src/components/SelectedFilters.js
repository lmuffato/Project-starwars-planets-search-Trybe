import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectedFilters() {
  const { firstFilter, setFirstFilter, secondFilter, setSecondFilter, setFilteredByValues,
    setFilteredByValues2 } = useContext(Context);
  function resetFilters1() {
    setFirstFilter([]);
    setFilteredByValues([]);
  }

  function resetFilters2() {
    setSecondFilter([]);
    setFilteredByValues2([]);
  }

  function filterAndButton1() {
    if (firstFilter.length > 0) {
      return (
        <div data-testid="filter">
          { firstFilter }
          <button type="button" onClick={ () => resetFilters1() }>
            X
          </button>
        </div>
      );
    }
  }

  function filterAndButton2() {
    if (secondFilter.length > 0) {
      return (
        <div data-testid="filter">
          { secondFilter }
          <button type="button" onClick={ () => resetFilters2() }>
            X
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      { filterAndButton1()}
      { filterAndButton2()}
    </div>
  );
}

export default SelectedFilters;
