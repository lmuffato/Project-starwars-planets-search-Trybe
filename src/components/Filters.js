import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { data, setData } = useContext(PlanetContext);

  const filterPlanet = (value) => {
    const filtered = data.filter((item) => (
      item.name.toUpperCase().includes(value.toUpperCase())
    ));
    setData(() => filtered);
  };

  return (
    <form>
      <label
        htmlFor="filter_planet"
      >
        Filtro
        <input
          name="filter_planet"
          onChange={ (e) => filterPlanet(e.target.value) }
          type="text"
          placeholder="Filtre o planeta aqui"
        />
      </label>
    </form>
  );
}

export default Filters;
