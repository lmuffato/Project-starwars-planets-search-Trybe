import React, { useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';

function InputTextFilter() {
  const { inputText, setInputText,
  } = useContext(PlanetContext);

  useEffect(() => {
  }, []);

  return (
    <span>
      <h1>{inputText}</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ inputText }
        onChange={ (event) => setInputText(event.target.value) }
      />
    </span>
  );
}

export default InputTextFilter;
