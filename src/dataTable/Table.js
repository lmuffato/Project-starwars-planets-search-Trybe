import React, { useContext, useEffect } from 'react';
import starWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getPlanets } = useContext(starWarsContext);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = data[0] && Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>{data[0] && columns.map((header) => <th key={ header }>{header}</th>)}</tr>
      </thead>
      <tbody>
        <tr>
          <td>table</td>
        </tr>
      </tbody>

    </table>
  );
}

export default Table;
