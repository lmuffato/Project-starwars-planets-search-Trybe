import React, { useState, useEffect } from 'react';
import FetchStarWars from '../services/FetchStarWars';
import RenderDataOfTable from '../services/RenderDataOfTable';

function Table() {
  let tableInformations = '';
  const [data, setData] = useState('');

  useEffect(() => {
    FetchStarWars().then((resp) => setData(resp));
  }, []);
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
