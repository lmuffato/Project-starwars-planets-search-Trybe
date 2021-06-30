import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { data, filters, setFilters } = useContext(PlanetContext);

  const filterPlanet = (value) => {
    const filtered = data.filter((item) => (
      item.name.toUpperCase().includes(value.toUpperCase())
    ));
    setFilters({
      ...filters,
      filterByName: { name: filtered },
    });
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

export default FilterByName;
