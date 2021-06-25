import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planetsData, filteredByName } = useContext(StarWarsContext);
  const { data } = planetsData;
  const columns = data[0] && Object.keys(data[0]);

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
        {filteredByName.map((row) => (
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
