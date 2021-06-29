import React, { useState, useContext } from 'react';

import FilterText from './InputsFilters/FilterText';
import FilterSelect from './InputsFilters/FilterSelect';
import PlanetContext from '../context/PlanetsContext';

import { valuesInputsFilter } from '../config/filters';
import FilterNumber from './InputsFilters/FilterNumber';

export default function ControlPanel() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueInput, setValueInput] = useState(0);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'column') setColumn(value);
    if (name === 'comparison') setComparison(value);
    if (name === 'value') setValueInput(value);
  };

  const {
    filters,
    handleName,
    addFilter,
  } = useContext(PlanetContext);

  const { filterByName } = filters;
  const { name } = filterByName;
  return (
    <div>
      <form>
        <FilterText
          title="Nome: "
          name="name"
          value={ name }
          handleName={ handleName }
        />
        {
          Object.keys(valuesInputsFilter.number).map((key, id) => (
            <FilterSelect
              key={ id }
              name={ key }
              values={ valuesInputsFilter.number[key] }
              handleSelectValue={ handleChange }
            />
          ))
        }
        <FilterNumber
          title="Valor: "
          name="value"
          value={ valueInput }
          handleValue={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            addFilter(column, comparison, valueInput);
            setColumn('');
            setComparison('');
            setValueInput(0);
          } }
        >
          Filrar
        </button>
      </form>
    </div>
  );
}
