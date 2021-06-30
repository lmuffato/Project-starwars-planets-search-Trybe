import React, { useContext, useEffect, useState } from 'react';
import '../pages/Table.css';
import context from '../context/context';

function TableBody() {
  const { filterData } = useContext(context);

  const renderTableBody = (planets) => (
    planets.map((planet) => (
      <tr key={ planet.name }>
        <td className="tableData">{ planet.name }</td>
        <td className="tableData">{ planet.rotation_period }</td>
        <td className="tableData">{ planet.orbital_period }</td>
        <td className="tableData">{ planet.diameter }</td>
        <td className="tableData">{ planet.climate }</td>
        <td className="tableData">{ planet.gravity }</td>
        <td className="tableData">{ planet.terrain }</td>
        <td className="tableData">{ planet.surface_water }</td>
        <td className="tableData">{ planet.population }</td>
        <td className="tableData">{ planet.films }</td>
        <td className="tableData">{ planet.created }</td>
        <td className="tableData">{ planet.edited }</td>
        <td className="tableData">{ planet.url }</td>
      </tr>
    ))
  );

  return (
    <tbody>
      { renderTableBody(filterData) }
    </tbody>
  );
}

export default TableBody;
