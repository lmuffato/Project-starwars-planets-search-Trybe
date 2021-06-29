/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import PlanetContext from '../context/PlanetsContext';

function Table() {
  const { isLoading, data, filters, fetchData, applyFilter } = useContext(PlanetContext);
  const regName = new RegExp(filters.filterByName.name, 'i');
  useEffect(() => {
    const fetchDataAPI = async () => {
      await fetchData();
    };
    fetchDataAPI();
  }, []);

  const applyFilters = (item) => {
    const { filterByNumericValues } = filters;
    if (!filterByNumericValues.length) {
      return true;
    }
    const isValid = [true, true];
    filterByNumericValues.forEach((filterNumeric, i) => {
      const { column, comparison, value } = filterNumeric;
      // const { column, comparison, value } = filterByNumericValues[0];
      if (column && comparison && value && applyFilter) {
        switch (comparison) {
        case 'maior que':
          isValid[i] = parseFloat(item[column]) > parseFloat(value);
          break;
        case 'menor que':
          isValid[i] = parseFloat(item[column]) < parseFloat(value);
          break;
        case 'igual a':
          isValid[i] = parseFloat(item[column]) === parseFloat(value);
          break;
        default: return true;
        }
      } else {
        isValid[i] = true;
      }
    });
    return isValid[0] && isValid[1];
  };

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
            ? data
              .filter((item) => regName.test(item.name))
              .filter((item) => applyFilters(item))
              .map((planet, id) => (
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
