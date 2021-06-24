import React, { useContext } from 'react';
import planetContext from '../context/planetContext';
import FilterInputs from './FilterInputs';
import FilterPlanets from './FilterPlanets';
import TableBody from './TableBody';

function Table() {
  const { data, filters, handleFilter } = useContext(planetContext);
  const { name } = filters.filterByName;
  const filterChanges = handleFilter();
  return (
    <>
      <FilterPlanets />
      <FilterInputs />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0] || []).map((result) => (
              <th key={ result }>{ result }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            filterChanges.filter((planet) => planet.name.toLowerCase()
              .includes(name.toLowerCase()))
              .map((planet) => TableBody(planet))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;

// // Ref about filtered inputs: https://codesandbox.io/s/react-hooks-search-filter-4gnwc;
