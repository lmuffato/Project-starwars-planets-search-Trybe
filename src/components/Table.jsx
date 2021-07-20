import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { data } = useContext(PlanetsContext);
  const residentlessData = data.map((planet) => {
    delete planet.residents;
    return planet;
  });

  return residentlessData === undefined || residentlessData === [] ? <div /> : (
    <table>
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
        <th>URL</th>
      </tr>
      {residentlessData.map((planet, index) => (
        <tr key={ index }>
          {Object.values(planet).map((value, secondaryIndex) => (
            <td key={ Object.keys(planet)[secondaryIndex] }>{ value }</td>))}
        </tr>))}
    </table>
  );
}

/* const Table = () => {
  const { dataFiltered,
    filter: { filters: { filterByName: { name } } } } = useContext(PlanetsContext);
  // useEffect(() => null, [dataFiltered]);
  return dataFiltered === undefined || dataFiltered === [] ? <div /> : (
    <table>
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
        <th>URL</th>
      </tr>
      {dataFiltered.map((planet, index) => {
        delete planet.residents;
        const planetsArray = Object.values(planet);
        const planetsKeys = Object.keys(planet);
        return planet.name.includes(name) ? (
          <tr key={ index }>
            {planetsArray.map((obj, index2) => (
              <td key={ planetsKeys[index2] }>{obj}</td>
            ))}
          </tr>)
          : null;
      })}
    </table>
  );
};
 */
