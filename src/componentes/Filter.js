import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Filter() {
  const { filters, setFilters } = useContext(MyTablecontext);

  /*  handleInputValue = (paran) => {
    setFilter({ ...filter, filterName: { name: paran.target.value } });
  };
 */

  return (
    <form>
      <label htmlFor="inputNameFilter">
        planet name
        <input
          type="text"
          name="namePlan"
          id="inputNameFilter"
          data="name-filter"
          onChange={
            (e) => (
              setFilters({
                ...filters, filterByName: { name: e.target.value },
              }))
          }
        />
      </label>
    </form>
  );
}

export default Filter;
