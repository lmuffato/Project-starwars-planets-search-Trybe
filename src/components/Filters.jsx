import React, { useContext } from 'react';
import {
  data as dataContext,
} from '../contexts/starWars';
import FilterByName from './filters/FilterByName';
import FilterByNumericValues from './filters/FilterByNumericValues';

export default function Filters() {
  const { planets, filteredPlanetsByNumeric } = useContext(dataContext);

  return (
    <div className="filters-container">
      <FilterByName
        arrayToFilter={ filteredPlanetsByNumeric.length ? filteredPlanetsByNumeric : planets }
      />
      <FilterByNumericValues />
    </div>
  );
}
