import React, { useState, useContext, useEffect } from 'react';

import Context from '../../../../context/Context';
import styles from './table.module.css';

function Table() {
  const { planets } = useContext(Context);
  const [headers, setHeaders] = useState([]);

  // It will set the table headers
  useEffect(() => {
    const tableHeaders = Object.keys(planets[0]).filter((key) => key !== 'residents');
    tableHeaders.forEach((header) => setHeaders((prev) => prev.concat(header)));
  }, [planets]);

  return (
    <table className={ styles.table }>
      {/* <thead> */}
      <tr>
        {headers.map((header) => (
          <th key={ header }>{header}</th>
        ))}
      </tr>
      {/* </thead> */}

      {/* <tbody> */}
      {planets.map((planet, planetIndex) => (
        <tr key={ planetIndex }>
          {headers.map((header, index) => (
            <td key={ `${planet.name}${index}` }>{planet[header]}</td>
          ))}
        </tr>
      ))}
      {/* </tbody> */}
    </table>
  );
}

export default Table;
