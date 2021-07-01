import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetsContext';
import applyFilterOnPlanets from '../utils/applyFilterOnPlanets';

function Table() {
  const {
    isLoading,
    fetchPlanets,
    data,
    planets,
    setPlanets,
    filters,
  } = useContext(PlanetContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = applyFilterOnPlanets(filters, data);
    setPlanets(filteredPlanets);
  }, [filters]);

  if (isLoading) return <p>Is loading...</p>;

  return (
    <table>
      <tbody>
        <tr>
          <th>Criado</th>
          <th>Editado</th>
          <th>Nome</th>
          <th>Período de rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Residentes</th>
          <th>Filmes</th>
        </tr>
        {planets && (planets.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.residents}</td>
            <td>{planet.films}</td>
          </tr>
        )))}
      </tbody>
    </table>
  );
}

export default Table;
