import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Filters() {
  const { setfilterByName, filters } = useContext(MyContext);
  function handleInputText(e) {
    setfilterByName(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        value={filters.filterByName.name}
        data-testid="name-filter"
        onChange={handleInputText}
      />
    </form>
  );
}

export default Filters;
