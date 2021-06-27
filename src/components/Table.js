import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TableHead from './factory/TableHead';

const Table = () => {
  const { data, filters } = useContext(AppContext);

  const filter = () => {
    const filterName = filters.filterByName.name
      ? data.filter((planet) => planet.name.includes(filters.filterByName.name)) : data;

    return filterName;
  };

  return (
    <table>
      <TableHead />
      <tbody>
        {filter().map((planet) => (
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
  );
};

export default Table;
