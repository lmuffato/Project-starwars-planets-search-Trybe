import React, { useContext } from 'react';
import StarwarsContext from '../context/context';

export default function FilterForm() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const { filterByName } = filters;
  const { name } = filterByName;

  const handleNameInput = ({ target }) => {
    setFilters((pastState) => ({
      ...pastState,
      filterByName: {
        name: target.value,
      },
    }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleNameInput }
      />
    </div>
  );
}
