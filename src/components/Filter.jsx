import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { data, filters, setFilters, setBackup } = useContext(MyContext);

  const { filterByName: { name } } = filters;
  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
    const filteredPlanets = data.filter((planet) => planet.name.includes(target.value));
    setBackup(filteredPlanets);
  };

  return (
    <label htmlFor="filterByName">
      <input
        id="filterByName"
        type="text"
        placeholder="Pesquise pelo nome"
        data-testid="name-filter"
        value={ name }
        name="name"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Filter;
