import React, { useContext } from 'react';
import context from '../context/context';

function Filter() {
  const { filters, setFilters } = useContext(context);
  const { name } = filters.filterByName;

  // useEffect(() => {
  //   const filter = planets.filter((planet) => planet.name === name);
  //   console.log(filter);
  //   filterPlanet(filter);
  // }, []);

  function filterName(ev) {
    setFilters({
      filterByName: {
        name: ev,
      },
    });
  }

  return (
    <section>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (ev) => filterName(ev.target.value) }
          value={ name }
        />
      </form>
    </section>
  );
}

export default Filter;
