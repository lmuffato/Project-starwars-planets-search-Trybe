// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useContext } from 'react';
import ContextApi from './ContextApi';

function TablePlanets() {
  const { data, keys } = useContext(ContextApi);
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.filter((key) => key !== 'residents')
              .map((key) => <th key={ key }>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.gravity}</td>
              <td>{planet.climate}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="del-btn"
        data-testid="delete-btn"
        onClick={ console.log('click!') }
      >
        X
      </button>
    </div>
  );
}

export default TablePlanets;
