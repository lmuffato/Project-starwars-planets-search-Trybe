import React, { useContext, useState } from 'react';
import planetContext from '../contexts/planetContext';

function FilterInput() {
  const { filters, setFilters, handleNameFilter } = useContext(planetContext);
  const [inputText, setInputText] = useState('');

  function handleInputChange(ev) {
    const name = ev.target.value;

    setInputText(name);

    const newFilter = filters;

    newFilter.filterByName.name = name;

    setFilters(newFilter);

    handleNameFilter();
  }

  return (
    <fieldset>
      <label htmlFor="planet-name-input">
        Nome:
        <input
          name="planet-name-input"
          id="planet-name-input"
          type="text"
          value={ inputText }
          onChange={ handleInputChange }
          data-testid="name-filter"
        />
      </label>

    </fieldset>
  );
}

export default FilterInput;
