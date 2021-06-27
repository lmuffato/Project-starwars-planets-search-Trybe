/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import PlanetContext from '../context/PlanetsContext';

function Table() {
  const { isLoading, data, filters, fetchData } = useContext(PlanetContext);
  const regName = new RegExp(filters.filterByName.name, 'i');
  useEffect(() => {
    const fetchDataAPI = async () => {
      await fetchData();
    };
    fetchDataAPI();
  }, []);

  if (isLoading) return <p>Carregando</p>;

  return (
    <table>
      <thead>
        <tr>
          {
            data.length
              ? Object.keys(data[0]).map((key) => <th key={ key }>{key}</th>)
              : null
          }
        </tr>
      </thead>
      <tbody>
        {
          data.length
            ? data.filter((item) => regName.test(item.name)).map((planet, id) => (
              <tr key={ id }>
                { Object.keys(planet).map((entrie) => (
                  <td key={ entrie }>{planet[entrie]}</td>
                )) }
              </tr>
            ))
            : null
        }
      </tbody>
    </table>
  );
}

export default Table;
