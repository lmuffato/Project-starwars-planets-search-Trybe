import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Header() {
  const { filters, filterDispatch } = useContext(PlanetContext);
  const { name } = filters.filterByName;

  return (
    <div className="header">
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome do Planeta"
          value={ name }
          onChange={
            (event) => filterDispatch({ filterByName: { name: event.target.value } })
          }
        />
      </form>
    </div>
  );
}
