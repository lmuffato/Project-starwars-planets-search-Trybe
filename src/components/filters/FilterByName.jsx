import React, { useContext, useState, useEffect } from 'react';
import { filters as filterContext } from '../../contexts/starWars';

export default function FilterByName() {
  const { setFilteredName, filters: { filterByName } } = useContext(filterContext);
  const [name, setName] = useState('');
  useEffect(() => {
    setFilteredName(name);
  }, [filterByName, name, setFilteredName]);
  return (
    <input
      type="text"
      placeholder="Buscar por nome"
      onChange={ ({ target: { value } }) => setName(value) }
      data-testid="name-filter"
    />
  );
}
