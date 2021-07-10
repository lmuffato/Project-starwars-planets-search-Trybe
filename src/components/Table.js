import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Table = () => {
  const { planets, filters, headers } = useContext(MyContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const { column: header, sort } = order;

  const filterNumeric = (valueA, valueB, comparison) => {
    if (typeof (valueA) === 'number' || typeof (valueB) === 'number') return false;
    valueA = parseInt(valueA, 10);
    valueB = parseInt(valueB, 10);
    if (comparison === 'maior que') return valueA > valueB;
    if (comparison === 'menor que') return valueA < valueB;
    if (comparison === 'igual a') return valueA === valueB;
    return true;
  };

  return (
    <table border="1">
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((item) => <th key={ item }>{item}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          filterByNumericValues
            .reduce((acc, { column, value, comparison }) => acc
              .filter((planet) => (
                filterNumeric(planet[column], value, comparison))),
            planets)
            .filter((planet) => (planet.name).includes(name))
            .sort((a, b) => {
              let columnA = a[header];
              let columnB = b[header];

              if (columnA === 'unknown') columnA = 0;
              if (columnB === 'unknown') columnB = 0;

              if (!Number.isNaN(Number(columnA))) {
                columnA = Number(columnA);
                columnB = Number(columnB);
              }

              if (columnA > columnB) {
                return sort === 'ASC' ? 1 : +'-1';
              }
              if (columnA < columnB) {
                return sort === 'ASC' ? +'-1' : 1;
              }
              return 0;
            })
            .map((planet, index) => (
              <tr key={ index }>
                {
                  Object.entries(planet)
                    .map(([key, indexTwo]) => (
                      <td
                        data-testid={ key === 'name' ? 'planet-name' : null }
                        key={ indexTwo }
                      >
                        {indexTwo}
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
