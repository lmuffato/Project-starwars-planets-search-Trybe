// Requisito 3

import React, { useContext } from 'react';
import Context from '../context/Context';

const Select = () => {
  const {
    setColumn,
    setValue, setComparison, handleClick, options } = useContext(Context);

  const handleSelectColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };

  const handleSelectValue = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSelectComparison = (event) => {
    const { value } = event.target;
    setComparison(value);
  };

  return (
    <div>
      <select data-testid="column-filter" onChange={ (e) => handleSelectColumn(e) }>
        {options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            {option}
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => handleSelectComparison(e) }
      >
        <option key=">" value="maior que">maior que</option>
        <option key="===" value="igual a">igual a</option>
        <option key="<" valeu="<">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handleSelectValue(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Pesquisar
      </button>
    </div>
  );
};

export default Select;
