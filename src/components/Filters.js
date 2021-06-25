import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { data, setFilter } = useContext(PlanetContext);

  useEffect(() => (
    setFilter({ filterByName: { name: data } })
  ), [data]);

  const filterPlanet = (value) => {
    const filtered = data.filter((item) => (
      item.name.toUpperCase().includes(value.toUpperCase())
    ));
    setFilter({ filterByName: { name: filtered } });
  };

  return (
    <form>
      <label
        htmlFor="filter_planet"
      >
        Filtro
        <input
          data-testid="name-filter"
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
