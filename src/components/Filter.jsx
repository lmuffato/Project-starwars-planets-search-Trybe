import React, { useContext } from 'react';
import DataContext from '../context/Context';

function Filter() {
  const { data, filters, setFilters, setBackup } = useContext(DataContext);
  const { filteredByName: { name: planetSearch },
    filterByNumericValues: { column, comparison, number } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filteredByName: {
        planetSearch: value,
      },
    });

    const filteredPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));
    setBackup(filteredPlanets);
  };
  const handleChange2 = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, [name]: value,
      },
    });
  };
  const arrayColumns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const arrayComparison = ['maior que', 'igual a', 'menor que'];

  const handleClick = () => {
    let filteredArray = [];
    if (comparison === 'maior que') {
      filteredArray = data.filter((planet) => (
        parseInt(planet[column], 10) > parseInt(number, 10)));
    } else if (comparison === 'menor que') {
      filteredArray = data.filter((planet) => (
        planet[column] < number || planet[column] === 'unknown'));
    } else if (comparison === 'igual a') {
      filteredArray = data.filter((planet) => (
        planet[column] === number));
    }
    setBackup(filteredArray);
  };

  return (
    <form>
      <label htmlFor="filter">
        Nome:
        <input
          data-testid="name-filter"
          type="text"
          value={ planetSearch }
          name="planetSearch"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="Selectcolumn">
        Selecione  uma coluna:
        <select
          id="Selectcolumn"
          name="column"
          value={ column }
          data-testid="column-filter"
          onChange={ handleChange2 }
        >
          {arrayColumns.map((element, index) => <option key={ index }>{element}</option>)}
        </select>
        <label htmlFor="Selectsize">
          Selecione uma faixa de valor:
          <select
            id="Selectsize"
            name="comparison"
            value={ comparison }
            data-testid="comparison-filter"
            onChange={ handleChange2 }
          >
            {arrayComparison
              .map((element, index) => <option key={ index }>{element}</option>)}
          </select>
        </label>
      </label>
      <label htmlFor="selectValue">
        Digite o um valor:
        <input
          type="number"
          data-testid="value-filter"
          id="selectValue"
          value={ number }
          onChange={ handleChange2 }
          name="number"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Aplicar filtros
      </button>
    </form>
  );
}

export default Filter;
