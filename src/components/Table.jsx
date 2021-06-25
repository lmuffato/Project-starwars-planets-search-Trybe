import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { keys, filteredPlanets, filterByNumeric } = useContext(PlanetsContext);

  const filteredFinalPlanets = filterByNumeric();

  if (filteredFinalPlanets.length > 0) {
    console.log('Existe');
  }

  const filteredByInput = (filtered) => filtered.map((planet) => (
    <tr key={ planet.name }>
      {Object.keys(planet)
        .map((key) => key !== 'residents'
          && <td key={ planet[key] }>{planet[key]}</td>)}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => key !== 'residents' && <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredFinalPlanets.length > 0
          ? filteredByInput(filteredFinalPlanets)
          : filteredByInput(filteredPlanets)}
      </tbody>
    </table>);
};

export default Table;
