import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { keys, filteredPlanets } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => key !== 'residents' && <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            {Object.keys(planet)
              .map((key) => key !== 'residents'
              && <td key={ planet[key] }>{planet[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>);
};

export default Table;
