import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { data as dataContext } from '../contexts/starWars';
import TableRow from './TableRow';

export default function TableData() {
  const {
    planets,
    filteredPlanetsByNumeric,
    currentPlanets,
  } = useContext(dataContext);
  const [planetsState, setPlanetsState] = useState(planets);

  useEffect(() => {
    setPlanetsState(currentPlanets.length ? currentPlanets : planets);
  }, [currentPlanets, filteredPlanetsByNumeric, planets]);

  // const checkIsFiltering = () => {
  //   if (
  //     (filterByName.name && !filteredPlanetsByNumeric.length)
  //     || (filterByNumericValues.length && !filteredPlanetsByNumeric.length)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  const renderCollumns = () => {
    if (planets.length) {
      return Object.keys(planets[0]).map((collumn, i) => (
        <th key={ i }>{collumn.toUpperCase()}</th>
      ));
    }
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          {renderCollumns()}
        </tr>
      </thead>
      {/* {checkIsFiltering() ? (
        <tbody>
          <tr>
            <td>
              <span>Nenhum planeta encontrado</span>
            </td>
          </tr>
        </tbody>
      ) : ( */}
      <tbody>
        {planetsState.map((planet, i) => (
          <TableRow key={ i } planet={ planet } />
        ))}
      </tbody>
      {/* )} */}
    </Table>
  );
}
