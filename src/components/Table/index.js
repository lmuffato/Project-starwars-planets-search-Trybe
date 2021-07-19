import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Table.css';

function filterData(data, filters) {
  const { filterByName: { name }, filterByNumericValues } = filters;
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

function generateTBody(data) {
  console.log('oi');
  const resident = 9;
  if (data) {
    return data.map((planet) => (
      <tr key={ `${planet.name}` }>
        {Object.values(planet).map((
          value,
          index,
        ) => (index !== resident
          ? <td key={ value }>{value}</td>
          : null))}
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
  console.log('filters', filters);

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
