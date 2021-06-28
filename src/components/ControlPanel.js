import React, { useContext } from 'react';

import FilterText from './InputsFilters/FilterText';
import FilterSelect from './InputsFilters/FilterSelect';
import PlanetContext from '../context/PlanetsContext';

import { valuesInputsFilter } from '../config/filters';
import FilterNumber from './InputsFilters/FilterNumber';

export default function ControlPanel() {
  const {
    filters,
    handleName,
    handleSelectValue,
    setApplyFilter,
  } = useContext(PlanetContext);

  const { filterByName } = filters;
  const { name } = filterByName;
  const { filterByNumericValues } = filters;
  const { value } = filterByNumericValues[0];
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
              handleSelectValue={ handleSelectValue }
            />
          ))
        }
        <FilterNumber
          title="Valor: "
          name="value"
          value={ value }
          handleValue={ handleSelectValue }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setApplyFilter(true) }
        >
          Filrar
        </button>
      </form>
    </div>
  );
}
