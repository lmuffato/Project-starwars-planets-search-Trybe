import React, { useContext } from 'react';
import PlanetsContext from '../../context/index';

function Table() {
  const { data, planets, filters } = useContext(PlanetsContext);
  const createHeaders = () => Object.keys(data[0]).map((header, key) => (
    <th key={ key }>
      { header }
    </th>));

  const filterByNumericValue = (filteredByName) => {
    if (filters.filterByNumericValues.length > 0) {
      let filteredPlanets = filteredByName;
      filters.filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        const parsedValue = parseInt(value, 10);
        switch (comparison) {
        case 'maior que':
          filteredPlanets = filteredPlanets
            .filter((element) => element[column] > parsedValue); break;
        case 'igual a':
          filteredPlanets = filteredPlanets
            .filter((element) => element[column] === value); break;
        case 'menor que': filteredPlanets = filteredPlanets
          .filter((element) => element[column] < parsedValue); break;
        default: filteredPlanets = '';
        }
      });
      return filteredPlanets;
    }
  };
  const createRows = () => {
    if (planets) {
      let filteredByName = planets
        .filter((filter) => filter.name.includes(filters.filterByName.name));
      if (filters.filterByNumericValues.length > 0) {
        filteredByName = filterByNumericValue(filteredByName);
      }
      return filteredByName.map((planet, key) => {
        const values = Object.values(planet);

        return (
          <tr key={ key }>
            {values.map((value, index) => <td key={ index }>{ value }</td>)}
          </tr>
        );
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {(data) && createHeaders()}
        </tr>
      </thead>
      <tbody>
        {(planets) && createRows()}
      </tbody>
    </table>
  );
}

export default Table;
