import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Table() {
  const { data, headers, filters } = useContext(MyTablecontext);

  function filtNum(paramArray) {
    const { filterByNumericValues } = filters;
    if (!filterByNumericValues.length) return paramArray;

    let newArray = array;

    filterByNumericValues.forEach((filt) => {
      const { comparison, column, value } = filt;

      if (comparison === 'maior que') {
        newArray = newArray.filter((pl) => parseFloat(pl[column]) > parseFloat(value));
      }
      if (comparison === 'menor que') {
        newArray = newArray.filter((pl) => parseFloat(pl[column]) < parseFloat(value));
      }
      if (comparison === 'igual a') {
        newArray = newArray.filter((pl) => parseFloat(pl[column]) === parseFloat(value));
      }
    });
    return newArray;
  }

  function fullFilt() {
    const { filterByName: { name } } = filters;
    const filtro = data.results.filter((namePlanet) => (
      namePlanet.name.includes(name)
    ));
    return filtNum(filtro);
  }

  if (!headers.length) return <h1>Navegando...</h1>;

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          fullFilt()
            .map((dataPlan) => (
              <tr key={ dataPlan.name }>
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
