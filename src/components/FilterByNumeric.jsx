import React, { useContext, useState } from 'react';
import { Input } from 'semantic-ui-react';
import PlanetsContext from '../context/ContextPlanets';

export default function FilterByNumeric() {
  const { setFilterByNumeric, availableFilters } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const setColumnValue = (event) => {
    setColumn(event.target.value);
  };

  const [comparison, setComparison] = useState('maior que');
  const setComparisonValue = (event) => {
    setComparison(event.target.value);
  };

  const [value, setValue] = useState(0);
  const setInputValue = (event) => {
    setValue(event.target.value);
  };

  const setFilterValues = () => {
    setFilterByNumeric(column, comparison, value);
    try {
      setColumn(document.getElementById('columnFilter')[1].value);
    } catch (error) {
      setColumn('');
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        id="columnFilter"
        value={ column }
        onChange={ setColumnValue }
      >
        {availableFilters.map((filter) => (
          <option
            value={ filter.value }
            key={ filter.value }
          >
            { filter.value }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        id="comparisonFilter"
        value={ comparison }
        onChange={ setComparisonValue }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <Input
        size="small"
        type="number"
        style={ { height: 41, marginRight: 5, marginLeft: 5 } }
        onChange={ setInputValue }
        value={ value }
      >
        <input data-testid="value-filter" id="inputFilter" />
      </Input>
      <button
        onClick={ setFilterValues }
        data-testid="button-filter"
        type="button"
      >
        Adicionar filtro
      </button>
    </div>
  );
}
