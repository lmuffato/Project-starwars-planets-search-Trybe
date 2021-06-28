import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, backup } = useContext(MyContext);
  const getKeys = Object.keys(data[0]);
  const filteredKeys = getKeys.filter((key) => key !== 'residents');
  const renderTable = (array) => array.map((planet) => (
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
  ));

  return (
    <section>
      <table>
        <tr>
          {filteredKeys.map((key, index) => <th key={ index }>{key}</th>)}
        </tr>
        {backup.length === 0
          ? renderTable(data)
          : renderTable(backup)}
      </table>
    </section>
  );
}

export default Table;
