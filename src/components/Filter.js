import React, { useContext } from 'react';
import myContext from '../context/mycontext';

function Filter() {
  const { data, filters, setFilters, setBackup } = useContext(myContext);
  const { filteredByName: { name } } = filters;
  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filteredByName: {
        name: target.value,
      },
    });
    const filteredPlanets = data.filter((planet) => planet.name.includes(target.value));
    setBackup(filteredPlanets);
  };
  return (
    <label htmlFor="planet">
      Digite o nome do planeta
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
        id="planet"
        name="name"
      />
    </label>
  );
}

export default Filter;
