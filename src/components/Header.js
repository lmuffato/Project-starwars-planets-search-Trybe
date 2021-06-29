import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import '../App.css';

export default function Header() {
  const { filters, filterDispatch } = useContext(PlanetContext);
  const { name } = filters.filterByName;

  return (
    <div className="filters">
      <form>
        <p>Filter by:</p>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Insert Planet's name"
          value={ name }
          onChange={
            (event) => filterDispatch({ filterByName: { name: event.target.value } })
          }
          className="inputSearch"
        />
      </form>
    </div>
  );
}
