import React, { useContext, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';
import PlanetCard from './PlanetCard';

function PlanetsList() {
  const { planets, getPlanets } = useContext(PlanetsContext);
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
        { planets ? planets.results
          .map((planet, index) => <PlanetCard key={ index } planet={ planet } />)
          : <tr><th> ...loading</th></tr>}
      </tbody>
    </table>
  );
}

PlanetsList.propTypes = {

};

export default PlanetsList;
