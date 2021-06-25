import React, { useState, useContext, useEffect } from 'react';

import Context from '../../../../context/Context';
import styles from './table.module.css';

function Table() {
  const { data } = useContext(Context);
  const [headers, setHeaders] = useState([]);

  // It will set the table headers
  useEffect(() => {
    const tableHeaders = Object.keys(data[0]).filter((key) => key !== 'residents');
    tableHeaders.forEach((header) => setHeaders((prev) => prev.concat(header)));
  }, [data]);

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
        {data.map((planet, planetIndex) => (
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
