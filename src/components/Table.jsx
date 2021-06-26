import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';
import NameInput from './NameInput';
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
    btn,
    setBtn,
  } = useContext(Context);

  const tableFilter = () => {
    const search = name.toLowerCase();
    let filteredPlanets = data;
    if (name === '' && btn === false) {
      filteredPlanets = data;
    } else if (search !== '' && btn === false) {
      filteredPlanets = data.filter((planet) => (
        planet.name.toLowerCase().includes(search)));
    } else if (btn && comparison === 'maior que') {
      filteredPlanets = data.filter((planet) => (
        planet[column] > Number(value)));
    } else if (btn && comparison === 'menor que') {
      filteredPlanets = data.filter((planet) => (
        planet[column] < Number(value)));
    } else if (btn && comparison === 'igual a') {
      filteredPlanets = data.filter((planet) => (
        planet[column] === value));
    }
    return filteredPlanets;
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
          onClick={ () => setBtn(true) }
        >
          Filtrar
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            {header.map((head, index) => (
              <th key={ index }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableFilter().map((planet, index) => (
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
