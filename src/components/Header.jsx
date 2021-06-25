import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';
import './Header.css';

export default function Header() {
  // const inputRef = useRef('');
  const { filters, setFilters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;

  // console.log(filters.filterByName.name);
  console.log(name);
  return (
    <div className="header">
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome do Planeta"
          value={ name }
          onChange={ (e) => setFilters({ filterByName: { name: e.target.value } }) }
        />
      </form>
    </div>
  );
}
