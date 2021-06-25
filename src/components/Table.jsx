import React, { useContext } from 'react';
import StarWarsContext from '../contexts/starWars';
import TableRow from './TableRow';

export default function Table() {
  const { planets } = useContext(StarWarsContext);

  const tableCollumns = [
    // 'name',
    // 'rotation_period',
    // 'orbital_period',
    // 'diameter',
    // 'climate',
    // 'gravity',
    // 'terrain',
    // 'surface_water',
    // 'population',
    // 'residents',
    // 'films',
    // 'created',
    // 'edited',
    // 'url',
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
    <table className="table">
      <thead>
        <tr>
          {tableCollumns.map((collumn, i) => <th key={ i }>{collumn.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => <TableRow key={ i } planet={ planet } />)}
      </tbody>
    </table>
  );
}
