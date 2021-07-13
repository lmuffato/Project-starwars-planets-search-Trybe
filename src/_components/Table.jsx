import React, { useContext } from 'react';
import { ApiContext } from '../_context/DataApi';
import Filters from './Filters';

function checkIsNumber(string) {
  return Number.isNaN(+string) ? string : +string;
}

const filterData = (data, filters) => {
  const { name } = filters.filterName;
  let filteredData = data.filter((planet) => planet.name.includes(name));

  const { filterByNumericValues, order } = filters;
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

  filteredData.sort((planet1, planet2) => {
    const direct = 1;
    const reverse = -1;
    const keep = 0;
    const { column } = order;

    const value1 = checkIsNumber(planet1[column]);
    const value2 = checkIsNumber(planet2[column]);

    if (value1 > value2) return order.sort === 'ASC' ? direct : reverse;
    if (value1 < value2) return order.sort === 'ASC' ? reverse : direct;

    return keep;
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
            filtered.map((planet) => (
              <tr key={ planet.name }>
                {Object.values(planet).map((value, index) => {
                  if (index !== 0) return <td key={ value }>{ value }</td>;
                  return <td key={ value } data-testid="planet-name">{ value }</td>;
                })}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
