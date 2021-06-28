import React from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Thead() {
  const { planets } = usePlanet();
  const headPlanets = planets[0] && Object.keys(planets[0]);
  return (
    <thead>
      <tr>
        { headPlanets && headPlanets.map((th) => (
          <th key={ th }>{th}</th>
        ))}
      </tr>
    </thead>
  );
}
