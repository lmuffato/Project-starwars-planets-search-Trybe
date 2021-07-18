import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Table.css';

function setFilter(dataRow, fill) {
  const newData = dataRow.filter((planet) => planet.name.toLowerCase().includes(fill));
  return newData;
}

function generateThead(data) {
  return data.map((
    item,
    index,
  ) => <th className="head" key={ index }>{item}</th>);
}

function generateTBody(data) {
  const resident = 9;

  return data.map((planet) => (
    <tr key={ `${planet.name}` }>
      {Object.values(planet).map((
        value,
        index,
      ) => (index !== resident
        ? <td key={ value }>{value}</td>
        : []))}
    </tr>
  ));
}

export default function Table() {
  const { filterText, setNewData, newData, dataColumn, dataRow } = useContext(AppContext);

  useEffect(() => {
    setNewData(setFilter(dataRow, filterText));
  }, [dataRow, filterText, setNewData]);

  return (
    <table>
      <tr>
        {generateThead(dataColumn)}
      </tr>
      {generateTBody(newData)}
    </table>
  );
}
