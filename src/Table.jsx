import React, { useContext } from 'react';
import CountriesContext from './context/CountriesContext';

function Table() {
  const { countries } = useContext(CountriesContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água em superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado em</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { countries.map((countrie) => (
          <tr key={ countrie.name }>
            <td>{countrie.name}</td>
            <td>{countrie.rotation_period}</td>
            <td>{countrie.orbital_period}</td>
            <td>{countrie.diameter}</td>
            <td>{countrie.climate}</td>
            <td>{countrie.gravity}</td>
            <td>{countrie.terrain}</td>
            <td>{countrie.surface_water}</td>
            <td>{countrie.population}</td>
            <td>{countrie.films}</td>
            <td>{countrie.created}</td>
            <td>{countrie.edited}</td>
            <td>{countrie.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
