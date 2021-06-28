import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { data, filters, setFilters, setBackup } = useContext(MyContext);

  const { filterByName: { name },
    filterByNumericValues: { column, comparison, value } } = filters;

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
    const filteredPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(target.value.toLowerCase()));
    setBackup(filteredPlanets);
  };

  const arrayColumns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const handleChange2 = ({ target: { name: name2, value: value2 } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, [name2]: value2,
      },
    });
  };

  const arrayComparison = ['maior que', 'igual a', 'menor que'];

  // const handleClick = () => {
  //   let filteredColumns = [];
  //   if (comparison === 'maior que') {
  //     filteredColumns = data.filter((planets) => planets[column] > value);
  //   } else if (comparison === 'igual a') {
  //     filteredColumns = data.filter((planets) => planets[column] === value);
  //   } else {
  //     filteredColumns = data.filter((planets) => planets[column] < value);
  //   }
  //   setBackup(filteredColumns);
  // };

  const handleClick = () => {
    let filteredArray = [];

    if (comparison === 'maior que') {
      filteredArray = data.filter((planet) => (
        parseInt(planet[column], 10) > parseInt(value, 10)));
    } else if (comparison === 'menor que') {
      filteredArray = data.filter((planet) => (
        planet[column] < value || planet[column] === 'unknown'));
    } else {
      filteredArray = data.filter((planet) => (
        planet[column] === value));
    }

    setBackup(filteredArray);
  };

  return (
    <form>
      <label htmlFor="filterByName">
        <input
          id="filterByName"
          type="text"
          placeholder="Pesquise pelo nome"
          data-testid="name-filter"
          value={ name }
          name="name"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="selectColumn">
        Selecione uma coluna
        <select
          id="selectColum"
          onChange={ handleChange2 }
          value={ column }
          name="column"
          data-testid="column-filter"
        >
          {arrayColumns.map((item, index) => <option key={ index }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="selectComparison">
        Selecione uma faixa de valor
        <select
          id="selectComparison"
          onChange={ handleChange2 }
          value={ comparison }
          name="comparison"
          data-testid="comparison-filter"
        >
          {arrayComparison.map((item, index) => <option key={ index }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="selectValue">
        Digite um valor
        <input
          id="selectValue"
          type="number"
          data-testid="value-filter"
          value={ value }
          name="value"
          onChange={ handleChange2 }
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
