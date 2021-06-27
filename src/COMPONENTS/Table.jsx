import React, { useContext } from 'react';
import MyContext from '../CONTEXT/DataContext';
import FilterName from './FilterName';
import FilterContext from '../CONTEXT/FilterContext';

function Table() {
  const data = useContext(MyContext);
  const contextFilter = useContext(FilterContext);
  console.log('contextFilter');
  console.log(contextFilter);
  const { planetName } = contextFilter;
  console.log(planetName);

  const filterTable = () => {
    const planetSearch = planetName.toLowerCase();
    const newData = data;
    console.log('newData');
    console.log(newData);
    if (planetSearch === '') {
      return newData;
    } if (planetSearch !== '') {
      const setData = newData.filter((planet) => (
        planet.name.toLowerCase().includes(planetSearch)));
      return setData;
    }
  };

  if (data === undefined) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <FilterName />
      <p>tabela</p>
      <table>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
        {filterTable().map((planet) => (
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}

      </table>
    </div>
  );
}

export default Table;
