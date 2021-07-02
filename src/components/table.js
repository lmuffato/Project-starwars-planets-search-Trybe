import React, { useContext } from 'react';
import ContextApi from '../context/context';
import ContextFilter from '../context/contextFilter';

function Table() {
  const { planets } = useContext(ContextApi);
  const { filters } = useContext(ContextFilter);
  const { filterByName } = filters;
  if (!planets.results) return <table />; // pedi explicação sobre isso

  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Diameter </th>
          <th> Gravity </th>
          <th> Climate </th>
          <th> Terrain </th>
          <th> Created </th>
          <th> Population </th>
          <th> Surface Water </th>
          <th> Orbital Period </th>
          <th> Rotation Period </th>
          <th> Edited </th>
          <th> Film </th>
          <th> URL </th>
        </tr>
      </thead>
      <tbody>
        { planets.results.filter(({ name }) => name
          .toLowerCase()
          .includes(filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.url }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
