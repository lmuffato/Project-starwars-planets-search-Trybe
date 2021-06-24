import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const { returnData, fetchApi, keys } = useContext(SWContext);

  useEffect(() => {
    fetchApi();
  }, []);

  return (keys !== undefined
    ? (
      <tbody>
        <tr>
          {keys.map((key, index) => <th key={ `${key}${index}` }>{ key }</th>)}
        </tr>
        {returnData.map((planet, index) => (
          <tr key={ `${planet}${index}` }>
            {Object.values(planet).map((property, index2) => (
              <td key={ `${planet}${index2}` }>{ property }</td>))}
          </tr>
        ))}
      </tbody>
    )
    : (<tbody><tr><td>carregando...</td></tr></tbody>));
}

export default Table;
