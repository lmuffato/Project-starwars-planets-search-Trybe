import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, headers, filters } = useContext(TableContext);

  function numericFilter(arr) {
    const { filterByNumericValues } = filters;

    if (!filterByNumericValues.length) return arr;

    let newArr = arr;

    filterByNumericValues.forEach((filtro) => {
      const { comparison, column, value } = filtro;
      if (comparison === 'maior que') {
        newArr = newArr.filter((pl) => parseFloat(pl[column]) > parseFloat(value));
      }
      if (comparison === 'menor que') {
        newArr = newArr.filter((pl) => parseFloat(pl[column]) < parseFloat(value));
      }
      if (comparison === 'igual a') {
        newArr = newArr.filter((pl) => parseFloat(pl[column]) === parseFloat(value));
      }
    });
    return newArr;
  }

  function allFilters() {
    const { filterByName: { name } } = filters;
    const filt = data.results.filter((pl) => (
      pl.name.includes(name)
    ));
    return numericFilter(filt);
  }

  if (!headers.length) return <div>loading...</div>;

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          allFilters()
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
