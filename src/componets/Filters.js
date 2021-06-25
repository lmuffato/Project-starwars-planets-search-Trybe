import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filters() {
  const { setFilters, filters, data } = useContext(StarwarsContext);
  console.log(data);

  function selectColum() {
    const columValues = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    return columValues.map((value) => <option key={ value }>{ value }</option>);
  }

  function selectComparsion() {
    const comparsionValues = ['maior que', 'menor que', 'igual a'];
    return comparsionValues.map((value) => <option key={ value }>{ value }</option>);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          [name]: value,
        },
      ],
    });
  }

  return (
    <>
      <div>
        <label htmlFor="name-filter">
          Nome do Planeta:
          <input
            id="name-filter"
            type="text"
            data-testid="name-filter"
            onChange={ (e) => setFilters({
              ...filters,
              filterByName: { name: e.target.value },
            }) }
          />
        </label>
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="colum"
          onChange={ (e) => handleChange(e) }
        >
          {selectColum()}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (e) => handleChange(e) }
        >
          {selectComparsion()}
        </select>
        <input
          type="text"
          data-testid="value-filter"
          name="value"
          onChange={ (e) => handleChange(e) }
        />
        <button
          type="button"
          data-testid="button-filter"
        >
          Adicionar Filtro
        </button>
      </div>
    </>
  );
}

export default Filters;
