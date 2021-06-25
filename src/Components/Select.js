import React, { useContext } from 'react';
import starWarContext from '../context/starWarsContext';

export default function Select() {
  const {
    setSelectInput,
    selectInput,
    filterSelect,
    newFilter,
  } = useContext(starWarContext);

  const renderOptions = () => {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const newArray = newFilter.map((r) => r.column);
    const removeOption = options.filter((res) => !newArray.includes(res));
    return (
      removeOption.map((opt, index) => (
        <option key={ index }>{ opt }</option>
      ))
    );
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setSelectInput({
          ...selectInput,
          input: target.value,
        }) }
      >
        { renderOptions() }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setSelectInput({
          ...selectInput,
          comparison: target.value,
        }) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ ({ target }) => setSelectInput({
          ...selectInput,
          valueInput: target.value,
        }) }
        type="number"
        data-testid="value-filter"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterSelect }
      >
        Adicionar filtro
      </button>
    </div>
  );
}
