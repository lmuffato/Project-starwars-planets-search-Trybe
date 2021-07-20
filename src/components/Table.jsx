import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { usefulData,
    search: { filters: { filterByName: { name } } } } = useContext(PlanetsContext);
  const [residentlessData, setResidentlessData] = useState([]);
  // setResidentlessData(usefulData.map((planet) => {
  //   delete planet.residents;
  //   return planet;
  // }));
  useEffect(() => {
    setResidentlessData(usefulData.map((planet) => {
      delete planet.residents;
      return planet;
    }));
  }, [usefulData]);

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
        planet.name.includes(name)
          ? (
            <tr key={ index }>
              {Object.values(planet).map((value, secondaryIndex) => (
                <td key={ Object.keys(planet)[secondaryIndex] }>{ value }</td>))}
            </tr>
          )
          : null
      ))}
    </table>
  );
}
