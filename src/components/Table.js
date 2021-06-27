import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TableHead from './factory/TableHead';

const Table = () => {
  const { data, filters } = useContext(AppContext);

  // Lógica do filtro https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/89/commits/c49a273c1000974f138da90e5f422d46ae664959
  // A ideia é retornar um filter antes do map, achei interessante :)
  const filter = () => {
    let dataFilters = filters.filterByName.name
      ? data.filter((planet) => planet.name.includes(filters.filterByName.name)) : data;

    filters.filterByNumericValues.forEach(({ column, filterBy, value }) => {
      if (filterBy === 'menor que') {
        dataFilters = dataFilters.filter((selected) => +selected[column] < +value);
      } else if (filterBy === 'maior que') {
        dataFilters = dataFilters.filter((selected) => +selected[column] > +value);
      } else if (filterBy === 'igual a') {
        dataFilters = dataFilters.filter((selected) => +selected[column] === +value);
      }
    });
    return dataFilters;
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
