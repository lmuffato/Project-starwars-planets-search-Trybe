import React, { useContext } from 'react';
import context from '../Provider/Context';

function Dropdown() {
  const { data, filter, setFilter, column, setColumn, operator, setOperator, value, setValue } = useContext(context);

  const arrayColumns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const arrayComparison = ['maior que', 'igual a', 'menor que'];

  const operatorsIf = () => {
    if (filter && operator === 'maior que') {
      operatorsIf = data.filter((goten) => (
        goten[column] > Number(value)));
    } else if (filter && operator === 'menor que') {
      operatorsIf = data.filter((goten) => (
        goten[column] < Number(value)));
    } else if (filter && operator === 'igual a') {
      operatorsIf = data.filter((goten) => (
        goten[column] === value));
    }
    return operatorsIf;
  };

  return (
    <div>
      <form>
        <label htmlFor="Scolumn">
          Selecione  uma coluna:
          <select
            id="Scolumn"
            name="column"
            onChange={ (e) => setColumn(e.target.value) }
            data-testid="column-filter"
          >
            {arrayColumns.map((option, index) => (
              <option key={ index } id={ option }>{option}</option>
            ))}
          </select>
          <label htmlFor="Ssize">
            Selecione uma faixa de valor:
            <select
              id="Ssize"
              name="comparison"
              onChange={ (e) => setOperator(e.target.value, setFilter(false)) }
              data-testid="comparison-filter"
            >
              {arrayComparison.map((option, index) => (
                <option key={ index } id={ option }>{option}</option>
              ))}
            </select>
          </label>
        </label>
        <label htmlFor="Svalue">
          Digite o um valor:
          <input
            type="number"
            id="Svalue"
            name="number"
            onChange={ (e) => setValue(e.target.value, setFilter(false)) }
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          onClick={ () => setFilter(true) }
          data-testid="button-filter"
        >
          Aplicar filtros
        </button>
      </form>

    </div>
  );
}

export default Dropdown;
