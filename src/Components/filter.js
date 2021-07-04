import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filter() {
  const { filter, setFilter } = useContext(StarWarsContext);
  const { name } = filter.filterByName;
  const handleChange = ({ target }) => {
    const filterByName = {
      name: target.value,
    };
    setFilter({ ...filter, filterByName });
  };
  return (
    <label htmlFor="nameFilter">
      Filtar por Nome
      <input
        type="text"
        id="nameFilter"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => handleChange(e) }
      />
    </label>
  );
}

export default Filter;
