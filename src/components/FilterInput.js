import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../contexts/planetContext';

function FilterInput() {
  const { setFilters } = useContext(planetContext);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setFilters({ filterByName: {
      name: inputText,
    } });
  }, [inputText, setFilters]);

  return(
    <fieldset>
      <label htmlFor="planet-name-input">Nome:</label>
      <input
        name="planet-name-input"
        id="planet-name-input"
        type="text"
        onChange={ (ev) => setInputText(ev.target.value) }
        data-testid='name-filter' />
    </fieldset>
   );
}

export default FilterInput;
