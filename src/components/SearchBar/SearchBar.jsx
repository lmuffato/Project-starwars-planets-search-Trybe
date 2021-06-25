import React from 'react';
import useStarWars from '../../hooks/useStarWars';
import Input from '../Generics/Input';

function SearchBar() {
  const { filteredPlanets } = useStarWars();
  return (
    <div className="search-name">
      <Input
        type="text"
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
        onChange={ (event) => filteredPlanets(event.target.value) }
      />
    </div>
  );
}

export default SearchBar;
