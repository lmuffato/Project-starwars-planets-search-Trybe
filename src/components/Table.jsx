import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../utils/PlanetsContext';
import './Table.css';
import fetchPlanets from '../services/fetchPlanets';

function Table() {
  const { setPlanets, planets, planetFilter } = useContext(PlanetsContext);
  const { filters: { filterByName: { name }, filterByNumericValues } } = planetFilter;
  const [filteredPlanet, setFilteredPlanet] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      setPlanets(await fetchPlanets());
    };
    getPlanets();
  }, [setPlanets]);

  useEffect(() => {
    const nameFilter = (planetList) => planetList.filter((planet) => (
      planet.name.toLowerCase().includes(
        name.toLowerCase(),
      )));

    const numericFilter = (planetList) => planetList.filter((planet) => (
      !filterByNumericValues.find(({ column, comparison, value }) => {
        if (comparison === 'maior que' && planet[column] !== 'unknown') {
          return Number(planet[column]) <= Number(value);
        }
        if (comparison === 'menor que' && planet[column] !== 'unknown') {
          return Number(planet[column]) >= Number(value);
        }
        return Number(planet[column]) !== Number(value);
      })
    ));

    setFilteredPlanet(numericFilter(nameFilter(planets)));
  }, [planetFilter, planets, name, filterByNumericValues]);

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
        { filteredPlanet.map((planet) => {
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
