import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Table() {
  const { data, headers, filter } = useContext(MyTablecontext);
  // console.log(headers);
  if (!headers.length) return <h1>Navegando...</h1>;
  function myFilter() {
    const { filterName: { name } } = filter;
    const filtro = data.results.filter((namePlanet) => (
      namePlanet.name.includes(name)
    ));
    return filtro;
  }
  return (
    <table>
      <tbody>
        <tr>
          {headers.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          myFilter()
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
