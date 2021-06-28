import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function MakeFilter() {
  const { data,
    setFilterName,
    lookForPlanetName,
    setLookForPlanetName,
  } = useContext(PlanetsContext);

  useEffect(() => {
    setFilterName(
      data
        .filter((planet) => planet.name.toLowerCase()
          .includes(lookForPlanetName.toLowerCase())),
    );
  }, [lookForPlanetName, data]);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ (e) => setLookForPlanetName(e.target.value) }
    />
  );
}

export default MakeFilter;
