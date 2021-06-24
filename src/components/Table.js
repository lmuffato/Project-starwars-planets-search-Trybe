import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import planetsApi from '../services/api';

function Table() {
  const { data, setData } = useContext(PlanetContext);

  useEffect(() => {
    const fetchAPI = () => planetsApi().then((res) => setData(() => res));
    fetchAPI();
  }, [setData]);

  const renderObjects = () => (
    <tbody>
      <tr>
        {Object.keys(data[0]).map((item, index) => (<th key={ index }>{item}</th>))}
      </tr>
      {data.map((item, index) => (
        <tr key={ index }>
          { Object.values(item).map((value, j) => (
            <td key={ j }>{value}</td>
          ))}
        </tr>

      ))}
    </tbody>
  );

  return (
    <table>
      {data[0] && renderObjects()}
    </table>
  );
}

export default Table;
