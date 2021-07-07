import React, { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const Table = () => {
  const { planets, filters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const headers = planets[0] || [];

  const comparingBetween = (valueA, valueB, comparison) => {
    if (typeof (valueA) === 'number' || typeof (valueB) === 'number') return false;

    valueA = parseInt(valueA, 10);
    valueB = parseInt(valueB, 10);

    if (comparison === 'maior que') return valueA > valueB;
    if (comparison === 'menor que') return valueA < valueB;
    if (comparison === 'igual a') return valueA === valueB;

    return true;
  };

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
          filterByNumericValues
            .reduce((acc, { column, value, comparison }) => acc
              .filter((planet) => (
                comparingBetween(planet[column], value, comparison))),
            planets)
            .filter((planet) => (planet.name).includes(name))
            .map((planet, index) => (
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
