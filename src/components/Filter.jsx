import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { data, planetName, setPlanetName, setBackup } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setPlanetName(target.value);
    const filteredPlanets = data.filter(({ name }) => name.includes(target.value));
    setBackup(filteredPlanets);
  };

  return (
    <label htmlFor="filterByName">
      <input
        id="filterByName"
        type="text"
        placeholder="Pesquise pelo nome"
        data-testid="name-filter"
        value={ planetName }
        name="planetName"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Filter;
