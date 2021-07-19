import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Table.css';

function filterData(data, filters) {
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  let filteredData = data.filter((
    planet,
  ) => planet.name.toLowerCase().includes(name.toLowerCase()));

  filterByNumericValues.forEach((filter) => {
    filteredData = filteredData.filter((planet) => {
      const columnValue = +(planet[filter.column]);
      const filterValue = +(filter.value);

      if (filter.comparison === 'maior que') {
        return (columnValue > filterValue && columnValue !== 'unknown');
      }

      if (filter.comparison === 'menor que') {
        return (columnValue < filterValue && columnValue !== 'unknown');
      }

      if (filter.comparison === 'igual a') {
        return (columnValue === filterValue && columnValue !== 'unknown');
      }

      return false;
    });
  });

  function checkIsNumber(string) {
    return Number.isNaN(+string) ? string : +string;
  }

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
}

function generateThead(data) {
  if (data) {
    return data.map((
      item,
      index,
    ) => <th className="head" key={ index }>{item}</th>);
  }
}

function mapPlanets(index, value) {
  if (index !== 0) {
    return <td key={ value }>{value}</td>;
  } return <td key={ value } data-testid="planet-name">{value}</td>;
}

function generateTBody(data) {
  const resident = 9;
  if (data) {
    return data.map((planet) => (
      <tr key={ `${planet.name}` }>
        {Object.values(planet).map((
          value,
          index,
        ) => (
          index !== resident && mapPlanets(index, value)
        ))}
      </tr>
    ));
  }
}

export default function Table() {
  const {
    dataColumn,
    dataRow,
    filters,
  } = useContext(AppContext);

  const dataFilters = filterData(dataRow, filters);

  return (
    <table>
      <thead>
        <tr>
          {generateThead(dataColumn)}
        </tr>
      </thead>
      <tbody>
        {generateTBody(dataFilters)}
      </tbody>
    </table>
  );
}
