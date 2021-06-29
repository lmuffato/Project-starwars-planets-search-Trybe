import React, { useContext, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';
import PlanetCard from './PlanetCard';

function PlanetsList() {
  const { filteredPlanets, planets, getPlanets } = useContext(PlanetsContext);
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <div>
      <span>
        <th>
          Name
        </th>
        <th>
          Population
        </th>
        <th>
          Climate
        </th>
        <th>
          Terrain
        </th>
        <th>
          Orbital Period
        </th>
        <th>
          Diameter
        </th>
        <th>
          Gravity
        </th>
        <th>
          Rotation Period
        </th>
        <th>
          Surface Water
        </th>
        <th>
          Films
        </th>
        <th>
          Created in
        </th>
        <th>
          Edited in
        </th>
        <th>
          Link
        </th>
      </span>
      <table>
        <tbody>
          {
            planets ? filteredPlanets
              .map((planet, index) => <PlanetCard key={ index } planet={ planet } />)
              : <tr><td> ...loading </td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

PlanetsList.propTypes = {

};

export default PlanetsList;
