import React, { useContext } from 'react';
import context from '../store/context';

const TableInput = () => {
  const { data, isLoading } = useContext(context);

  // const getPlanets = () => data.map((planet, index) => {
  //   delete planet.residents;
  //   return data[index];
  // });

  if (isLoading) return <div>Loading...</div>;

  // console.log(data);

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
        {data.length && data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.films}</td>
            <td>{planet.url}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
    // <ul>
    //   {data.length && getPlanets()
    //     .map(({ name }, index) => <li key={ index }>{name}</li>)}
    // </ul>
  );
};

export default TableInput;
