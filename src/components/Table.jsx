import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, headers, filters } = useContext(TableContext);

  if (!headers.length) return <div>loading...</div>;

  function filter() {
    const { filterByName: { name },
      filterByNumericValues: { column, comparison, value } } = filters;
    const filt = data.results.filter((pl) => (
      pl.name.includes(name)
    ));
    if (comparison === 'maior que') {
      return filt.filter((planet) => parseFloat(planet[column]) > parseFloat(value));
    }
    if (comparison === 'menor que') {
      return filt.filter((planet) => parseFloat(planet[column]) < parseFloat(value));
    }
    if (comparison === 'igual a') {
      return filt.filter((planet) => parseFloat(planet[column]) === parseFloat(value));
    }
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
