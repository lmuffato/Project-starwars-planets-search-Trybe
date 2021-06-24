import React, { useContext } from 'react';
import StarwarsContext from '../context/context';

export default function Table() {
  const { data, filters } = useContext(StarwarsContext);

  const createArrayKeys = () => {
    if (data[0]) return Object.keys(data[0]).map((key) => <th key={ key }>{key}</th>);
  };

  const createArrayValues = () => {
    const { filterByName: { name } } = filters;
    const filtered = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    if (data[0]) {
      return filtered.map((planet, index) => {
        const values = Object.values(planet);
        return (
          <tr key={ index }>
            {values.map((value) => <td key={ value }>{value}</td>)}
          </tr>
        );
      });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            { createArrayKeys()}
          </tr>
        </thead>
        <tbody>
          { createArrayValues() }
        </tbody>
      </table>
    </div>
  );
}
