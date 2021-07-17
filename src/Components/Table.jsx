import React, { useContext } from 'react';
import Context from '../Provider/Context';

const filterData = (data, filters) => {
  const { name } = filters.filterByName;
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
  const { data, loading, filters } = useContext(Context);
  const filtered = filterData(data, filters);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0])
                .map((GokuSSJ) => <th key={ GokuSSJ }>{GokuSSJ}</th>)
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
