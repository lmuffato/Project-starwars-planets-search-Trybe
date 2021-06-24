import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import planetsApi from '../services/api';

function Table() {
  const { data, setData } = useContext(PlanetContext);

  useEffect(() => {
    const fetchAPI = () => planetsApi().then((res) => setData(() => res));
    fetchAPI();
  }, [setData]);

  return (
    <table>
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <tr>
              <th>{Object.keys(item)}</th>
            </tr>
          );
        }
        return (
          <tr key={ index }>
            {Object.values(item).map((val, j) => (
              <td key={ j }>{ val }</td>
            ))}
          </tr>
        );
      })}
    </table>
  );
}

/* {data.map((item, index) => (
  <tr key={ index }>
    {Object.values(item).map((val, j) => (
      <td key={ j }>{ val }</td>
    ))}
  </tr>
))} */

export default Table;
