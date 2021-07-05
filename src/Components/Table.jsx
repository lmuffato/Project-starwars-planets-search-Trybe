import React, { useContext } from 'react';
import context from '../Provider/Context';
import SearchBar from './SearchBar';

function Table() {
  const { data, filters, filter, column, operator, value } = useContext(context);
  const { filterByName } = filters;
  const { name } = filterByName;

  // const filterName = data.filter((el) => el.name.toLowerCase().includes(name));

  const operatorsIf = () => {
    const lower = name.toLowerCase();
    let filterName = data;

    if (name === '' && filter === false) {
      filterName = data;
    } else if (lower !== '' && filter === false) {
      filterName = data.filter((result) => (
        result.name.toLowerCase().includes(lower)));
    } else if (filter && operator === 'maior que') {
      filterName = data.filter((goten) => (
        goten[column] > Number(value)));
    } else if (filter && operator === 'menor que') {
      filterName = data.filter((goten) => (
        goten[column] < Number(value)));
    } else if (filter && operator === 'igual a') {
      filterName = data.filter((goten) => (
        goten[column] === value));
    }
    return filterName;
  };

  const renderTable = () => operatorsIf.map((planet) => (
    <tr key={ planet.name }>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.residents}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
    </tr>
  ));

  return (
    <div>
      <SearchBar />
      <h1 id="title">API Table</h1>
      <table id="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default Table;
