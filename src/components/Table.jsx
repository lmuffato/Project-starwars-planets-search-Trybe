import React, { useContext } from 'react';

import MyContext from '../context/myContext';
import { category } from '../data';
import { filterForNumber } from '../utils/functions';

function renderColumn(planet) {
  const values = Object.values(planet);
  const INDEX_RESIDENT = 9;
  return (
    values.map((item, index) => <td key={ index }>{index !== INDEX_RESIDENT && item}</td>)
  );
}

function renderTable(typeFilter) {
  return (
    <table>
      <tr>
        {category.map((item) => <th key={ item }>{item}</th>)}
      </tr>
      {typeFilter.map((planet) => (
        <tr key={ planet.name }>
          {renderColumn(planet)}
        </tr>
      ))}
    </table>
  );
}

function Table() {
  const {
    data,
    filterByNumericValues,
    filters: { filterByName: { name } },
  } = useContext(MyContext);

  console.log(filterByNumericValues);

  if (!data.length) return <p>Loading...</p>;

  if (name !== '') {
    const filterName = data.filter((planet) => planet.name.toLowerCase().includes(name));
    return renderTable(filterName);
  }

  if (filterByNumericValues.length) {
    const filterNum = filterForNumber(data, filterByNumericValues[0]);
    console.log(filterNum);
    return renderTable(filterNum);
  }

  return (
    renderTable(data)
  );
}

export default Table;
