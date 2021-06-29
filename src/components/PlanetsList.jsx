import React, { useContext, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';
import PlanetCard from './PlanetCard';

function PlanetsList() {
  const { filteredPlanets, planets, getPlanets } = useContext(PlanetsContext);
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <tbody>
      {
        planets ? filteredPlanets
          .map((planet, index) => <PlanetCard key={ index } planet={ planet } />)
          : <tr><td> ...loading </td></tr>
      }
    </tbody>
  );
}

export default PlanetsList;
