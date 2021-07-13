import React, { useContext } from 'react';
import { ApiContext } from '../_context/DataApi';
import Filters from './Filters';

const filterData = (data, filters) => {
  const { name } = filters.filterName;
  let filteredData = data.filter((planet) => planet.name.includes(name));

  const { filterByNumericValues } = filters;
  filterByNumericValues.forEach((filter) => {
    filteredData = filteredData.filter((planet) => {
      const columnValue = +(planet[filter.column]);
      const filterValue = +(filter.value);

      if (filter.comparison === 'maior que') return (columnValue > filterValue);
      if (filter.comparison === 'menor que') return (columnValue < filterValue);
      if (filter.comparison === 'igual a') return (columnValue === filterValue);

      return false;
    });
  });

  return filteredData;
};
const Table = () => {
  const { data, loading, filters } = useContext(ApiContext);
  const filtered = filterData(data, filters);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Filters />
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0])
                .map((inforEach) => <th key={ inforEach }>{inforEach}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((each) => (
              <tr key={ each.name }>
                {Object.values(each).map((value) => (
                  <td key={ value }>{value}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
