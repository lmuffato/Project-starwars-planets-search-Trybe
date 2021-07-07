import React, { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const Table = () => {
  const { planets, filters, headers } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const { column: header, sort } = order;

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
              .map((headerInitial) => <th key={ headerInitial }>{headerInitial}</th>)
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
            .sort((a, b) => {
              let fieldA = a[header];
              let fieldB = b[header];

              if (fieldA === 'unknown') fieldA = 0;
              if (fieldB === 'unknown') fieldB = 0;

              if (!Number.isNaN(Number(fieldA))) {
                fieldA = Number(fieldA);
                fieldB = Number(fieldB);
              }

              if (fieldA > fieldB) {
                return sort === 'ASC' ? 1 : +'-1';
              }
              if (fieldA < fieldB) {
                return sort === 'ASC' ? +'-1' : 1;
              }
              return 0;
            })
            .map((planet, index) => (
              <tr key={ index }>
                {
                  Object.entries(planet)
                    .map(([key, info]) => (
                      <td
                        data-testid={ key === 'name' ? 'planet-name' : null }
                        key={ info }
                      >
                        {info}
                      </td>
                    ))
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};
export default Table;
