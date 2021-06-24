import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../utils/PlanetsContext';
import './Table.css';
import fetchPlanets from '../services/fetchPlanets';

function Table() {
  const { setPlanets, planets } = useContext(PlanetsContext);
  useEffect(() => {
    const getPlanets = async () => {
      setPlanets(await fetchPlanets());
    };
    getPlanets();
  }, [setPlanets]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { planets ? planets.map((planet) => {
          const objectKeys = Object.keys(planet);
          return (
            <tr key={ `${planet.name}-line` }>
              { objectKeys.map((key) => (
                <td className="cell" key={ planet[key] }>{ planet[key] }</td>
              )) }
            </tr>
          );
        }) : null }

      </tbody>
    </table>
  );
}

export default Table;
