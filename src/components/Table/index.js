import React, { useState, useEffect } from 'react';
import { fetchByColumn, fetchByRow } from '../../services/planetsApi';
import './Table.css';

function generateThead(data) {
  return data.map((
    item,
    index,
  ) => <th className="head" key={ index }>{item}</th>);
}

function tableBody(data) {
  const resident = 9;

  return data
        && data.map((planet) => (
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
        {tableBody(dataRow)}
      </tbody>
    </table>
  );
}
