import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { name, setName, setColumn, setOperator,
    setValue, setFilter } = useContext(Context);

  const optionsSize = [' ', 'maior que', 'menor que', 'igual a'];
  const optionsColumn = [' ', 'population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <>
      <label htmlFor="name-filter">
        Nome:
        <input
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          data-testid="name-filter"
          placeholder="Digite um Nome"
        />
      </label>
      <br />
      <br />
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {optionsColumn.map((option, index) => (
          <option key={ index } id={ option }>{option}</option>
        ))}
      </select>
      {' '}
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setOperator(e.target.value, setFilter(false)) }
      >
        {optionsSize.map((option, index) => (
          <option key={ index } id={ option }>{option}</option>
        ))}
      </select>
      {' '}
      <input
        type="number"
        onChange={ (e) => setValue(e.target.value, setFilter(false)) }
        data-testid="value-filter"
      />
      {' '}
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilter(true) }
      >
        filtrar
      </button>
    </>
  );
}

export default Filters;
