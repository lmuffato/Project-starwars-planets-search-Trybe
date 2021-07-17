import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { fetchByColumn, fetchByRow } from '../../services/planetsApi';
import './Table.css';

function generateThead(data) {
  return data.map((
    item,
    index,
  ) => <th className="head" key={ index }>{item}</th>);
}

function setFilter(dataRow, filter) {
  const newData = dataRow.filter((planet) => planet.name.toLowerCase().includes(filter));
  return newData;
}

function generateTBody(data, filter) {
  const resident = 9;

  return data
        && setFilter(data, filter).map((planet) => (
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

export default function Table() {
  const [dataColumn, setDataColumn] = useState([]);
  const [dataRow, setDataRow] = useState([]);
  const { filterText } = useContext(AppContext);

  useEffect(() => {
    fetchByColumn()
      .then((res) => setDataColumn(res));
    fetchByRow()
      .then((res) => setDataRow(res));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {generateThead(dataColumn)}
        </tr>
      </thead>
      <tbody>
        {generateTBody(dataRow, filterText)}
      </tbody>
    </table>
  );
}
