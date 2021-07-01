import React, { useContext } from 'react';
import AppliedFilters from './AppliedFilters';
import FilterName from './FilterName';
import FilterColunm from './FilterColunm';
import FilterContext from '../CONTEXT/FilterContext';
import MyContext from '../CONTEXT/DataContext';

function Table() {
  const contextData = useContext(MyContext);
  const { headTable } = contextData;
  const contextFilter = useContext(FilterContext);
  const { filtered/* , filter */ } = contextFilter;
  // const { filterByNumericValues } = filter.filters;

  if (filtered === undefined) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <FilterName />
      <FilterColunm />
      <AppliedFilters />
      <table>
        <tr>
          {headTable.map((head, index) => (
            <th key={ index }>{head}</th>
          ))}
        </tr>
        {filtered.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}

      </table>
    </div>
  );
}

export default Table;
