import React, { useContext, useEffect } from 'react';
import starWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getPlanets } = useContext(starWarsContext);
  const columns = data[0] && Object.keys(data[0]);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // video utilizado como base de consulta na construção da tabela https://www.youtube.com/watch?v=d1r0aK5awWk
  return (
    <table>
      <thead>
        <tr>
          {
            data[0] && columns.map((header) => (
              <th key={ Math.random() * 100 }>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={ Math.random() * 100 }>
            {
              columns.map((column) => (
                <td
                  key={ Math.random() * 100 }
                >
                  {row[column]}
                </td>
              ))
            }
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default Table;
