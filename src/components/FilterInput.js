import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../contexts/planetContext';

function FilterInput() {
  const { setFilters } = useContext(planetContext);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setFilters({ filterByName: {
      name: inputText,
    } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText, setFilters]);

  return (
    <fieldset>
      <label htmlFor="planet-name-input">
        Nome:
        <input
          name="planet-name-input"
          id="planet-name-input"
          type="text"
          onChange={ (ev) => setInputText(ev.target.value) }
          data-testid="name-filter"
        />
      </label>

    </fieldset>
  );
}

export default FilterInput;
