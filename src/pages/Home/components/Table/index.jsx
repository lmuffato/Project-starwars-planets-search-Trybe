import React, { useState, useContext, useEffect } from 'react';

import Context from '../../../../context/Context';
import styles from './table.module.css';

function Table() {
  const { data, filters } = useContext(Context);
  const [headers, setHeaders] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // It will set the table headers
  useEffect(() => {
    const tableHeaders = Object.keys(data[0]).filter((key) => key !== 'residents');
    tableHeaders.forEach((header) => setHeaders((prev) => prev.concat(header)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This will filter the planets
  useEffect(() => {
    const { filters: { filterByName: { name }, filterByNumericValues } } = filters;
    let planets = data;

    if (name) {
      planets = planets.filter(({ name: planetName }) => {
        planetName = planetName.toLowerCase();
        return planetName.includes(name.toLowerCase());
      });
    }

    filterByNumericValues.forEach(({ column, comparison, findByValue }) => {
      planets = planets.filter((planet) => {
        const planetColumnValue = Number(planet[column]);

        switch (comparison) {
        case 'maior que':
          return planetColumnValue > findByValue;
        case 'menor que':
          return planetColumnValue < findByValue;
        default:
          return planetColumnValue === Number(findByValue);
        }
      });
    });

    setFiltered(planets);
  }, [filters, data]);

  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {filtered.map((planet, planetIndex) => (
          <tr key={ planetIndex }>
            {headers.map((header, index) => (
              <td key={ `${planet.name}${index}` }>{planet[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
