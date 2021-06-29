import React, { useContext } from 'react';
import Context from '../context/Context';

const FilterComponent = () => {
  const {
    dataRead,
    dataFilterWrite,
    filtersWrite,
    filters,
    setFilterBynumber,
    setFilterComparison,
    setFilterValue,
    filterByNumber,
    filterComparison,
    filterValue,
    dataWrite,
  } = useContext(Context); // posso ter x variáveis no mesmo contexto
  // devo alterar este dataRead, aplicando filtro durante onChange do input.
  // este array filtrado devo setar no estado como outra variável.
  // console.log(dataRead);

  const handleChange = (ev) => {
    const dataLocal = dataRead;
    const dataFiltered = dataLocal
      .filter((data) => data.name.includes(ev.target.value));
    // console.log(dataFiltered); // array filtrado (este array deve ficar sendo alterado no estado?!)
    // keys = Object.keys(dataRead[0]);
    dataFilterWrite(dataFiltered); // seta array filtrado (dados filtrados)
    filtersWrite({ // seta filtros
      ...filters,
      filteredByName: {
        name: ev.target.value,
      },
    });
  };

  const handleColumn = ({ target }) => {
    setFilterBynumber(target.value);
  };

  const handleComparison = ({ target }) => {
    // console.log(target);
    setFilterComparison(target.value);
  };

  const handleValue = ({ target }) => {
    // console.log(typeof (target.value));
    setFilterValue(Number(target.value));
  };

  const filterByNumericF = (arr) => {
    switch (filterComparison) {
    case 'menor que': {
      // filtrar todos indices do arr q filterByNumber < filterValue
      const arrFiltered = arr
        .filter((planet) => Number(planet[filterByNumber]) < Number(filterValue));
      return arrFiltered;
    }
    case 'maior que': {
      const arrFiltered = arr
        .filter((planet) => Number(planet[filterByNumber]) > Number(filterValue));
      return arrFiltered;
    }
    case 'igual a': {
      const arrFiltered = arr
        .filter((planet) => Number(planet[filterByNumber]) === Number(filterValue));
      return arrFiltered;
    }
    default:
      console.log('Erro');
    }
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    filtersWrite({
      ...filters,
      filterByNumericValues: [ // poderia salvar somente este objeto no estado, mas preferi tratá-los como variáveis simples para melhor entendimento.
        {
          column: filterByNumber,
          comparison: filterComparison,
          value: filterValue,
        },
      ],
    });
    // aqui devo filtrar o dataRead de acordo com esse filtro
    // const dataLocal = dataRead;
    const filteredData = filterByNumericF(dataRead);
    dataWrite(filteredData);
    // console.log(filteredData); // este filteredData eu atualizo no dataRead!
    // posteriormente devo setar novamente o array filtrado.
  };

  return (
    <form>
      <label htmlFor="inputText">
        Buscar:
        <input
          data-testid="name-filter"
          type="text"
          id="inputText"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="selectColumn">
        Coluna:
        <select id="selectColumn" onChange={ handleColumn } data-testid="column-filter">
          <option value="orbital_period" selected>orbital_period</option>
          <option value="population">population</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select
          data-testid="comparison-filter"
          id="comparisonFilter"
          onChange={ handleComparison }
        >
          <option value="maior que" selected>maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          type="number"
          id="valueFilter"
          onChange={ handleValue }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
};

export default FilterComponent;
