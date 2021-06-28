import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function sortASC(arr, col) {
  const param = -1;
  return (
    arr.sort((a, b) => {
      if (a[col] < b[col]) return param;
      if (a[col] > b[col]) return 1;
      return 0;
    })
  );
}

function sortParseASC() {
  const param = -1;
  return (
    arr.sort((a, b) => {
      if (parseFloat(a[col]) < parseFloat(b[col])) return param;
      if (parseFloat(a[col]) > parseFloat(b[col])) return 1;
      return 0;
    })
  );
}

function sortDESC(arr, col) {
  const param = -1;
  return (
    arr.sort((a, b) => {
      if (a[col] < b[col]) return 1;
      if (a[col] > b[col]) return param;
      return 0;
    })
  );
}

function sortArr(arr, col, sor) {
  const param = -1;
  if (sor === 'ASC' && Number.isNaN(parseFloat(arr[0][col]))) {
    return (
      sortASC(arr, col)
    );
  }
  if (sor === 'DESC' && Number.isNaN(parseFloat(arr[0][col]))) {
    return (
      sortDESC()
    );
  }
  if (sor === 'ASC' && !Number.isNaN(parseFloat(arr[0][col]))) {
    return (
      sortParseASC()
    );
  }
  if (sor === 'DESC' && !Number.isNaN(parseFloat(arr[0][col]))) {
    return (
      arr.sort((a, b) => {
        if (parseFloat(a[col]) < parseFloat(b[col])) return 1;
        if (parseFloat(a[col]) > parseFloat(b[col])) return param;
        return 0;
      })
    );
  }
}

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
    const { filterByName: { name }, order: { column, sort } } = filters;
    const filt = data.results.filter((pl) => (
      pl.name.includes(name)
    ));
    return sortArr(numericFilter(filt), column, sort);
  }

  if (!headers.length) return <div>loading...</div>;

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{ head }</th>)}
        </tr>
        {
          allFilters()
            .map((planet) => (
              <tr key={ planet.name }>
                {
                  headers.map((e) => {
                    if (e === 'name') {
                      return (
                        <td data-testid="planet-name" key={ planet[e] }>{ planet[e] }</td>
                      );
                    }
                    return <td key={ planet[e] }>{ planet[e] }</td>;
                  })
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
