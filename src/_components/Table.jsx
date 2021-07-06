import React, { useContext } from 'react';
import { ApiContext } from '../_context/DataApi';
import Filters from './Filters';

const filterData = (data, filters) => {
  const { name } = filters.filterName;
  const filteredData = data.filter((planet) => planet.name.includes(name));
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
