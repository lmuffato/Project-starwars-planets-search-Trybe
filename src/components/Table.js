import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const { returnData, fetchApi, keys } = useContext(SWContext);

  useEffect(() => {
    fetchApi();
  }, []);

  return (keys !== undefined
    ? (
      <table>
        <tr>
          {keys.map((key) => <th key={ key }>{ key }</th>)}
        </tr>
        {returnData.map((planet) => (
          <tr key={ planet }>
            {Object.values(planet).map((property) => (
              <td key={ property }>{ property }</td>))}
          </tr>
        ))}
      </table>
    )
    : (<span>carregando...</span>));
}

export default Table;
