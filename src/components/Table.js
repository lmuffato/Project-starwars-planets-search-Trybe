import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DataTable from './DataTable';
import '../style/table.css';

function Table() {
  const { planets } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {
          (planets === undefined)
            ? ''
            : planets.map((item) => <DataTable key={ item.name } item={ item } />)
        }
      </tbody>
    </table>
  );
}

export default Table;
