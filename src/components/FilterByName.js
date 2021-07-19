import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

const FilterByName = () => {
  const { name, handleChange } = useContext(planetContext);

  // const handleChange = (event) => {
  //   setName({ filterByName: { name: event.target.value } });
  // };

  return (
    <form>
      <label htmlFor="name">
        Filter by Name:
        <input
          onChange={ ({ target: { value } }) => handleChange(value) }
          data-testid="name-filter"
          type="text"
          name="name"
          value={ name }
        />
      </label>
    </form>
  );
};

export default FilterByName;
