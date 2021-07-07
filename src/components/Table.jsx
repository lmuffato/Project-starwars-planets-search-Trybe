import React, { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const Table = () => {
  const { planets } = useContext(StarWarsContext);
  const headers = planets[0] || [];
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((header, index) => <th key={ index }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet, index) => (
            <tr key={ index }>
              {
                Object.values(planet)
                  .map((info) => <td key={ info }>{info}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
