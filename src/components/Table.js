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
      <tbody>
        {data.map((item, index) => {
          if (index === 0) {
            return (
              <tr key="header">
                {Object.keys(item).map((keys, i) => (
                  <th key={ i }>{ keys }</th>
                ))}
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
      </tbody>
    </table>
  );
}

export default Table;
