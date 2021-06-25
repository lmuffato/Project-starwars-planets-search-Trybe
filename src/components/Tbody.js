import React, { useContext } from 'react';
// import { upperFirst } from 'lodash';// Creditos a Rafael Medeiros por essa dica!!!
import context from '../store/Context';

function is(planet, filterByNumericValues) {
  if (filterByNumericValues[0].comparison === 'maior que') {
    return Number(planet[filterByNumericValues[0].column])
        > Number(filterByNumericValues[0].value);
  }
  if (filterByNumericValues[0].comparison === 'menor que') {
    return Number(planet[filterByNumericValues[0].column])
        < Number(filterByNumericValues[0].value);
  }
  if (filterByNumericValues[0].comparison === 'igual a') {
    return Number(planet[filterByNumericValues[0].column])
      === Number(filterByNumericValues[0].value);
  }
}

function Tbody() {
  const {
    data,
    keys,
    filter: { filteredByName },
    numericValues: { filterByNumericValues },
  } = useContext(context);

  return (
    <tbody>
      {data
        .filter(
          (planet) => planet.name.toLowerCase().includes(filteredByName.toLowerCase()),
        )
        .filter((planet) => is(planet, filterByNumericValues))
        .map((planet) => (
          <tr key={ planet.name }>
            {keys.map((key) => <td key={ key }>{planet[key]}</td>)}
          </tr>
        ))}
    </tbody>
  );
}

export default Tbody;
