import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import planetsApi from '../services/api';

function Table() {
  const { filters, setData } = useContext(PlanetContext);
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    if (filters.filterByName) {
      setFiltred(filters.filterByName.name);
    }
  }, [filters]);

  useEffect(() => {
    const fetchAPI = () => planetsApi().then((res) => setData(() => res));
    fetchAPI();
  }, [setData]);

  const renderObjects = () => (
    <tbody>
      <tr>
        {Object.keys(filtred[0]).map((item, index) => (<th key={ index }>{item}</th>))}
      </tr>
      {filtred.map((item, index) => (
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
      {filtred[0] && renderObjects()}
    </table>
  );
}

export default Table;
