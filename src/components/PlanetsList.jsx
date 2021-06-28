import React, { useContext, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';
import PlanetCard from './PlanetCard';

function PlanetsList() {
  const { filteredPlanets, planets, getPlanets } = useContext(PlanetsContext);
  let filterCondition;
  if (filteredPlanets) {
    filterCondition = filteredPlanets.length > 0;
  } else {
    filterCondition = false;
  }
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <table>
      <thead>
        <tr>
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
        </tr>
      </thead>
      <tbody>
        {
          planets ? (filterCondition ? filteredPlanets : planets)
            .map((planet, index) => <PlanetCard key={ index } planet={ planet } />)
            : <tr><td> ...loading </td></tr>
        }
      </tbody>
    </table>
  );
}

PlanetsList.propTypes = {

};

export default PlanetsList;
