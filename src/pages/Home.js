import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from './components/header';
import '../index.css';

export default function Home() {
  const { setFilterName, filterByNumber: result, addNewFilter,
    setCategory, setComparison, setValue, numericFilter, removeFilter,
  } = useContext(Context);

  const renderPlanets = () => {
    if (result) {
      return (
        result.map((item, index) => {
          const { name, rotation_period: rotation, orbital_period: orbital,
            diameter, climate, gravity, terrain, surface_water: surface, population,
            films, created, edited, url } = item;
          return (
            <tr key={ index }>
              <td>{name}</td>
              <td>{rotation}</td>
              <td>{orbital}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surface}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })
      );
    }
  };

  const renderOptions = () => {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period',
      'surface_water'];
    const array = numericFilter.map((item) => item.column);
    const newArray = options.filter((i) => !array.includes(i));
    return newArray;
  };

  function renderFilters() {
    if (numericFilter) {
      return (
        numericFilter.map((item) => {
          const { column, comparison, value } = item;
          return (
            <div data-testid="filter" key={ column }>
              column:
              {column}
              , comparison:
              {comparison}
              , value:
              {value}
              <button
                type="button"
                onClick={ () => removeFilter(column) }
              >
                x
              </button>
            </div>
          );
        })
      );
    }
  }

  return (
    <div>
      <h3>Filtros</h3>
      <input
        type="text"
        placeholder="nome"
        data-testid="name-filter"
        onChange={ ({ target }) => setFilterName(target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setCategory(target.value) }
      >
        {renderOptions().map((opt, index) => <option key={ index }>{ opt }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        placeholder="valor"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addNewFilter }
      >
        Adicionar Filtro
      </button>
      {renderFilters()}
      <table className="table">
        <Header />
        <tbody>
          { renderPlanets() }
        </tbody>
      </table>
    </div>
  );
}
