import React, { useContext, useState, useEffect } from 'react';
import { filters as filterContext } from '../../contexts/starWars';

export default function FilterByName() {
  const { setFilteredName, filters: { filterByName } } = useContext(filterContext);
  const [filterName, setName] = useState('');
  useEffect(() => {
    setFilteredName(filterName);
  }, [filterByName, filterName, setFilteredName]);
  return (
    <input
      type="text"
      placeholder="Buscar por nome"
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => setName(value) }
    />
  );
}
