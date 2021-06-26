import React, { useContext, useState } from 'react';
import ContextStauo from '../provider/ContextStauo';
import { valueFor } from '../services/getSelects';

function selects({ ...context }) {
  const { filters, setFilters, inputFilt, setInputFilt, filtersArray } = context;
  const numberMagic = 3;

  const handleChange = ({ target: { name, value } }) => {
    setInputFilt({
      ...inputFilt,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, { ...inputFilt }],
    });
  };

  const valuesForFilter = (array) => (
    <select
      name={ array.length > numberMagic ? 'column' : 'comparison' }
      data-testid={
        array.length > numberMagic ? 'column-filter' : 'comparison-filter'
      }
      onChange={ handleChange }
      className="selects"
    >
      <option value="select">selecione</option>
      {array.map((title, index) => (
        <option
          key={ index }
          value={ title }
        >
          {title}
        </option>
      ))}
    </select>
  );

  const inputNumber = () => (
    <input
      name="value"
      data-testid="value-filter"
      className="input-Number"
      onChange={ handleChange }
    />
  );

  const btnSubmit = () => (
    <button
      type="button"
      data-testid="button-filter"
      className="btn"
      onClick={ handleClick }
    >
      Filtrar
    </button>
  );

  return (
    <div>
      {valuesForFilter(filtersArray)}
      {valuesForFilter(valueFor)}
      {inputNumber()}
      {btnSubmit()}
    </div>
  );
}

function SelectsComponents() {
  const { filters, setFilters, filtersArray } = useContext(ContextStauo);
  const [inputFilt, setInputFilt] = useState({});

  const context = { filters, setFilters, inputFilt, setInputFilt, filtersArray };
  return (
    selects(context)
  );
}

export default SelectsComponents;
