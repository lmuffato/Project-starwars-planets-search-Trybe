import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import planetsApi from '../services/api';

function Table() {
  const { filters, data, setData, filtred, setFiltred } = useContext(PlanetContext);

  useEffect(() => {
    if (filters.filterByName) {
      setFiltred(filters.filterByName.name);
    }
  }, [filters, setFiltred]);

  useEffect(() => {
    if (filters.filterByNumericValues) {
      const { column, comparasion, value } = filters.filterByNumericValues[0];

      console.log(column, comparasion, value);
    }
  }, [filters]);

  useEffect(() => {
    const fetchAPI = () => planetsApi().then((res) => setData(() => res));
    fetchAPI();
  }, [setData]);

  const renderObjects = () => (
    <tbody>
      <tr>
        {Object.keys(data[0]).map((item, index) => (<th key={ index }>{item}</th>))}
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
