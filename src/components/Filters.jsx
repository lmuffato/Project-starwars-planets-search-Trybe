import React, { useContext, useState, useEffect } from 'react';
import { filters as filterContext, data } from '../contexts/starWars';
import FilterByName from './filters/FilterByName';

export default function Filters() {
  const { planets } = useContext(data);
  const {
    filters: { filterByName },
    setFilteredPlanets,
  } = useContext(filterContext);

  useEffect(() => {
    const filteredByName = planets.filter(({ name }) => name
      .toLowerCase()
      .includes(filterByName.name));
    setFilteredPlanets(filteredByName);
  }, [planets, filterByName.name, setFilteredPlanets]);

  return (
    <div className="filters-container">
      <FilterByName />
    </div>
  );
}
