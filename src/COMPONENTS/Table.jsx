import React, { useContext } from 'react';
// import MyContext from '../CONTEXT/DataContext';
import FilterName from './FilterName';
import FilterColunm from './FilterColunm';
import FilterContext from '../CONTEXT/FilterContext';

function Table() {
  // const data = useContext(MyContext);
  const contextFilter = useContext(FilterContext);
  const { filtered } = contextFilter;

  if (filtered === undefined) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <FilterName />
      <FilterColunm />
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
        {filtered.map((planet) => (
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
