import React, { useContext } from 'react';
import starWarsPlanets from '../../context';

export default function Table() {
  const { data } = useContext(starWarsPlanets);

  const tableHeaders = Object.keys(data[0]);
  const residentsIndex = tableHeaders.indexOf(/residents/i);
  const fixedHeaders = tableHeaders.splice(residentsIndex, 1);

  return (
    <table>
      <thead>
        <tr>
          {fixedHeaders.map((header, index) => <th key={ index }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
          <tr key={ planet.name }>
            { fixedHeaders.map((header, index) => (
              <td key={ `${planet.name}${index}` }>{ planet[header] }</td>
            )) }
          </tr>
        ))}
      </tbody>
    </table>
  );
}
