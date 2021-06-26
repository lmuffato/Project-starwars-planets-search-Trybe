import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Table() {
  const { data, headers } = useContext(MyTablecontext);
  // console.log(headers);
  if (!headers.length) return <h1>Navegando...</h1>;
  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          data.results
            .map((dataPlan) => (
              <tr key={ dataPlan }>
                {
                  headers.map((index) => (
                    <td key={ dataPlan[index] }>
                      { dataPlan[index] }
                    </td>))
                }
              </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
