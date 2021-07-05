import React, { useState, useContext } from 'react';
import Context from './context';

const filtForArray = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const { filters, setFilters } = useContext(Context);

  const [filtColumn, setfiltColumn] = useState();
  const [filtArray, setfiltArray] = useState(filtForArray);
  const [filtComparison, setfiltComparison] = useState();
  const [filtValue, setfiltValou] = useState();

  function handeleClick() {
    setFilters({ ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat({
        column: filtColumn,
        comparison: filtComparison,
        value: filtValue,
      }),
    });
    setfiltArray(filtArray.filter((e) => e !== filtColumn));
  }

  return (
    <form>
      <label htmlFor="inputNameFilter">
        planet name
        <input
          type="text"
          name="namePlan"
          id="inputNameFilter"
          data-testid="name-filter"
          onChange={
            (e) => (
              setFilters({
                ...filters,
                filterByName: { name: e.target.value },
              }))
          }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ (e) => (setfiltColumn(e.target.value)) }
        value={ filtColumn }
      >
        {filtArray.map((e) => (
          <option
            key={ e }
            name={ e }
            value={ e }
          >
            {e}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ filtComparison }
        onChange={ (e) => (setfiltComparison(e.target.value)) }
      >
        <option name="maior que" value="maior que">maior que</option>
        <option name="menor que" value="menor que">menor que</option>
        <option name="igual a" value="igual a">igual a</option>
      </select>
      <label htmlFor="quantidade">
        <input
          id="quantidade"
          name="quantidade"
          type="number"
          value={ filtValue }
          data-testid="value-filter"
          onChange={ (e) => setfiltValou(e.target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handeleClick }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}
export default Filter;
