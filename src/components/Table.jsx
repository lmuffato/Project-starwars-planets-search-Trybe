import React, { useContext } from 'react';
import StarwarsContext from '../context/context';

export default function Table() {
  const { data, filters } = useContext(StarwarsContext);

  const createArrayKeys = () => {
    if (data[0]) return Object.keys(data[0]).map((key) => <th key={ key }>{key}</th>);
  };

  const filterByNumerics = () => {
    let returneList = data;
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach((object) => {
      if (object.comparison === 'maior') {
        returneList = returneList
          .filter((planet) => Number(planet[object.column]) > Number(object.value));
      } else if (object.comparison === 'menor') {
        returneList = returneList
          .filter((planet) => planet[object.column] < object.value);
      } else {
        returneList = returneList
          .filter((planet) => planet[object.column] === object.value);
      }
    });
    return returneList;
  };

  const createArrayValues = () => {
    const { filterByName: { name } } = filters;
    const newData = filterByNumerics();
    const filtered = newData
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    if (newData[0]) {
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
