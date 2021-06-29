import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';
import NameInput from './nameInput';
import SelectColumn from './SelectColumn';
import ComparisonColumn from './ComparisonColumn';
import ValueInput from './ValueInput';

function Table() {
  const { data,
    name,
    header,
    column,
    comparison,
    value,
    setFilterNum,
    filterNum,
    planetsList,
    setPlanetsList,
    setValue,
    setColumn,
    setComparison,
    handleFilter,
  } = useContext(Context);

  let filteredPlanets = planetsList;
  const search = name.toLowerCase();
  if (search !== '') {
    filteredPlanets = planetsList.filter((planet) => (
      planet.name.toLowerCase().includes(search)));
  }

  const handleClick = () => {
    if (comparison === 'maior que') {
      filteredPlanets = data.filter((planet) => (
        planet[column] > Number(value)));
      setPlanetsList(filteredPlanets);
    } else if (comparison === 'menor que') {
      filteredPlanets = data.filter((planet) => (
        planet[column] < Number(value)));
      setPlanetsList(filteredPlanets);
    } else if (comparison === 'igual a') {
      filteredPlanets = data.filter((planet) => (
        planet[column] === value));
      setPlanetsList(filteredPlanets);
    }
    setFilterNum([...filterNum, { value, column, comparison }]);
    document.getElementById(comparison).remove();
    document.getElementById(column).remove();
    setColumn('orbital_period');
    setComparison('menor que');
    setValue('');
  };

  return (
    <>
      <NameInput />
      <div className="filter">
        <SelectColumn />
        <ComparisonColumn />
        <ValueInput />
        <button
          type="button"
          className="button-filter"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
      {(filterNum !== '')
        ? filterNum.map((filter, index) => (
          <div key={ index } className="filter-values" data-testid="filter">
            <p>
              {`Filtro Aplicado: ${filter.column} ${filter.comparison} ${filter.value}`}
            </p>
            <button
              type="button"
              id={ `button${index}` }
              onClick={ (event) => handleFilter(event) }
            >
              X
            </button>
          </div>
        ))
        : <p className="filter-values">Nenhum filtro numérico aplicado</p>}
      <table className="table">
        <thead>
          <tr>
            {header.map((head) => (
              <th key={ head }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
