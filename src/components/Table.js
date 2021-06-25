import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading, filters } = useContext(PlanetContext);

  const tableHeader = () => {
    const headers = data.map((planet) => {
      const tableHeaders = Object.keys(planet);

      return tableHeaders;
    });

    if (data.length !== 0) {
      return (
        <tr>
          { Object.values(headers[0].map((header, index) => {
            if (header !== 'residents') {
              return <th key={ index }>{ header }</th>;
            }
            return null;
          })) }
        </tr>
      );
    }
  };

  const tableContent = () => {
    if ('filterByName' in filters) {
      const testFilter = data
        .filter((planets) => planets.name.includes(filters.filterByName.name));

      return (
        testFilter.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {
                planet.films
                  .map((film, index) => (<ul key={ index }><li>{ film }</li></ul>))
              }
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))
      );
    }

    return (
      data.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {
              planet.films
                .map((film, index) => (<ul key={ index }><li>{ film }</li></ul>))
            }
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))
    );
  };

  return !isLoading ? (
    <table>
      <thead>
        { tableHeader() }
      </thead>
      <tbody>
        { tableContent() }
      </tbody>
    </table>
  ) : <span>Loading...</span>;
}

export default Table;
