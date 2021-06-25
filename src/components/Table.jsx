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
      if (object.comparison.includes('maior que')) {
        returneList = returneList
          .filter((planet) => Number(planet[object.column]) > Number(object.value));
      } else if (object.comparison.includes('menor que')) {
        returneList = returneList
          .filter((planet) => Number(planet[object.column]) < Number(object.value));
      } else {
        returneList = returneList
          .filter((planet) => Number(planet[object.column]) === Number(object.value));
      }
    });
    return returneList;
  };

  const createArrayValues = () => {
    const { filterByName: { name } } = filters;
    const newData = filterByNumerics();
    console.log(name);
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
