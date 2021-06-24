import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RenderDataOfTable from '../services/RenderDataOfTable';

function Table() {
  const { data } = useContext(StarWarsContext);
  let tableInformations = '';

  if (data) tableInformations = RenderDataOfTable(data.results);

  return (
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
        <th>edited,</th>
        <th>url</th>
      </tr>
      { tableInformations }
    </table>
  );
}

export default Table;
