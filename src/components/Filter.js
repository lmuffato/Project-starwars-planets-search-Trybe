import React, { useContext } from 'react';
import myContext from '../context/mycontext';

function Filter() {
  const { data, planetName, setPlanetName, setBackup } = useContext(myContext);
  const handleChange = ({ target }) => {
    setPlanetName(target.value);
    const filteredPlanets = data.filter(({ name }) => name.includes(target.value));
    setBackup(filteredPlanets);
  };
  return (
    <label htmlFor="planet">
      Digite o nome do planeta
      <input
        type="text"
        data-testid="name-filter"
        value={ planetName }
        onChange={ handleChange }
        id="planet"
      />
    </label>
  );
}

export default Filter;
