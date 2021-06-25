import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../utils/PlanetsContext';
import './Table.css';
import fetchPlanets from '../services/fetchPlanets';

function Table() {
  const { setPlanets, planets, planetFilter } = useContext(PlanetsContext);
  const { filters: { filterByName: { name } } } = planetFilter;
  const { filters: { filterByNumericValues } } = planetFilter;

  useEffect(() => {
    const getPlanets = async () => {
      setPlanets(await fetchPlanets());
    };
    getPlanets();
  }, [setPlanets]);

  const nameFilter = (planetList) => planetList.filter((planet) => (
    planet.name.toLowerCase().includes(
      name.toLowerCase(),
    )));

  const comparisonFilter = (planetList) => planetList.filter((planet) => {
    let check = true;

    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'higher'
        && Number(filter.value) >= Number(planet[filter.column])) check = false;
      if (filter.comparison === 'lesser'
        && Number(filter.value) <= Number(planet[filter.column])) check = false;
      if (filter.comparison === 'equal'
        && planet[filter.column] !== filter.value) check = false;
    });
    return check;
  });

  const filteredPlanets = () => {
    const displayPlanets = comparisonFilter(planets);
    return nameFilter(displayPlanets);
  };

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
        { filteredPlanets().map((planet) => {
          const objectKeys = Object.keys(planet);
          return (
            <tr key={ `${planet.name}-line` }>
              { objectKeys.map((key) => (
                <td className="cell" key={ planet[key] }>{ planet[key] }</td>
              )) }
            </tr>
          );
        }) }

      </tbody>
    </table>
  );
}

export default Table;
