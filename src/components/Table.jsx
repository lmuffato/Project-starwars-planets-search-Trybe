import React, { useContext } from 'react';
import ContextPlanets from '../store/ContextPlanets';

export default function Table() {
  const { data } = useContext(ContextPlanets);
  console.log(data[0]);
  return (
    <div>
      <tr key="table_header">
        {data.length && Object.keys(data[0]).map((key) => <th key={ key }>{ key }</th>)}
      </tr>
      {data.length && data.map((planet, index) => (
        <tr key={ index }>
          {Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
        </tr>
      ))}
    </div>
  );
}
