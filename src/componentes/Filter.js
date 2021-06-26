import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Filter() {
  const { filter, setFilter } = useContext(MyTablecontext);

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
          dtaa="name-filter"
          onChange={
            (paran) => (
              setFilter({
                ...filter, filterName: { name: paran.target.value },
              }))
          }
        />
      </label>
    </form>
  );
}

export default Filter;
