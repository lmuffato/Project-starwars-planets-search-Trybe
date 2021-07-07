import React, { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const Table = () => {
  const { planets, filters: { filterByName: { name } } } = useContext(StarWarsContext);
  const headers = planets[0] || [];
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((header) => <th key={ header }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((planet) => (name ? (planet.name).includes(name) : true))
            .map((planet) => (
              <tr key={ planet.name }>
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
