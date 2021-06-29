import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import '../App.css';
/* 3 - Crie um filtro para valores numéricos */
export default function Header() {
  const {
    filters, filterDispatch, filterOptions, filterOptionDispatch,
  } = useContext(PlanetContext);
  const { name } = filters.filterByName;

  const handleFilterChange = ({ target }) => {
    filterOptionDispatch({
      ...filterOptions,
      [target.name]: target.value,
    });
  };

  const handleChange = ({ target }) => filterDispatch({
    ...filters,
    filterByName: {
      name: target.value,
    },
  });

  const handleClick = () => {
    const { filterByNumber } = filters;
    if (filterByNumber.length === 1 && filterByNumber[0].column === '') {
      filterDispatch({
        ...filters,
        filterByNumber: [
          {
            column: filterOptions.columnFilter,
            comparison: filterOptions.comparisonFilter,
            value: filterOptions.valueFilter,
          },
        ],
      });
      console.log(filterByNumber[0].column);
    } else {
      filterDispatch({
        ...filters,
        filterByNumber: [
          ...filterByNumber.concat(
            {
              column: filterOptions.columnFilter,
              comparison: filterOptions.comparisonFilter,
              value: filterOptions.valueFilter,
            },
          ),
        ],
      });
    }
  };

  return (
    <div className="filters">
      <h1>Filter by:</h1>
      <form>
        <p>Name:</p>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Insert Planet's name"
          value={ name }
          onChange={ handleChange }
          className="inputSearch"
        />
        <p id="numberFilters">
          Columns:
          {/*
          O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: population, orbital_period, diameter, rotation_period, surface_water. Deve ser uma tag select com a propriedade data-testid='column-filter';
          */}
          <select
            data-testid="column-filter"
            id="column-filter"
            name="columnFilter"
            onChange={ handleFilterChange }
          >

            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </p>
        {/*
        O segundo deve determinar se a faixa de valor será maior que, menor que ou igual a o numero que virá a seguir. Uma tag select com a propriedade data-testid='comparison-filter';
        */}
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonFilter"
          onChange={ handleFilterChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        {/*
        O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag input com a propriedade data-testid='value-filter';
        */}
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          name="valueFilter"
          onChange={ handleFilterChange }
          placeholder="Insira a quantidade"
        />
        {/*
        Deve haver um botão para acionar o filtro, com a propriedade data-testid='button-filter'.
        */}
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
          className="btn btn-warning"
        >
          Search
        </button>
      </form>
    </div>
  );
}
