import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, headers } = useContext(TableContext);
  if (!headers.length) return <div>loading...</div>;
  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          data.results
            .map((planet) => (
              <tr key={ planet }>
                {
                  headers.map((e) => <td key={ planet[e] }>{ planet[e] }</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
