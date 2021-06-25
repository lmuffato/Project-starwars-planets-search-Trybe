import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, headers, filters } = useContext(TableContext);

  if (!headers.length) return <div>loading...</div>;

  function filter() {
    const { filterByName: { name } } = filters;
    const filt = data.results.filter((pl) => (
      pl.name.includes(name)
    ));
    return filt;
  }

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          filter()
            .map((planet) => (
              <tr key={ planet.name }>
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
