import React, { useContext } from 'react';
import context from '../store/Context';
import is from '../services/Condition';

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
            {keys.map((key) => (
              key === 'residents' ? null : <td key={ key }>{planet[key]}</td>))}
          </tr>
        ))}
    </tbody>
  );
}

export default Tbody;
