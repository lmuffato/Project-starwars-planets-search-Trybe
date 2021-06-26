import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { data } from '../contexts/starWars';
import TableRow from './TableRow';

export default function TableData() {
  const { planets, filteredPlanets, filters } = useContext(data);
  const [planetsState, setPlanetsState] = useState(planets);

  useEffect(() => {
    setPlanetsState(filteredPlanets.length ? filteredPlanets : planets);
  }, [filteredPlanets, planets]);

  const tableCollumns = [
    'nome',
    'período de rotação',
    'período orbital',
    'diâmetro',
    'clima',
    'gravidade',
    'terreno',
    'água da superfície',
    'população',
    'filmes',
    'criada',
    'editado',
    'url',
  ];

  return (
    <Table bordered hover>
      <thead>
        <tr>
          {tableCollumns.map((collumn, i) => (
            <th key={ i }>{collumn.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      {filters.filterByName.name && !filteredPlanets.length ? (
        <tbody><tr><td><span>Nenhum planeta encontrado</span></td></tr></tbody>
      ) : (
        <tbody>
          {planetsState.map((planet, i) => (
            <TableRow key={ i } planet={ planet } />
          ))}
        </tbody>
      )}
    </Table>
  );
}
