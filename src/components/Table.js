import React, { useContext } from 'react';
import context from '../store/context';

const TableInput = () => {
  const { data, isLoading, filters } = useContext(context);
  const { filterByName, filterByNumericValues } = filters;

  const getPlanets = () => {
    if (data) {
      const filterPlanets = data
        .filter((planet) => planet.name.includes(filterByName.name)); // encontra o(s) planeta(s) em data com nome que esteja contido no valor obtido do input
      return filterPlanets; // se não tiver nenhum no input, retorna todos os planetas
    }
  };

  const compareValues = (filterElement) => {
    const filterColumn = filterElement.column;
    const filterComparison = filterElement.comparison;
    const filterValue = Number(filterElement.value);

    switch (filterComparison) {
    case 'maior que':
      return data.filter((item) => Number(item[filterColumn]) > filterValue);
    case 'menor que':
      return data.filter((item) => Number(item[filterColumn]) < filterValue);
    case 'igual a':
      return data.filter((item) => Number(item[filterColumn]) === filterValue);
    default:
      break;
    }
  };

  const filter = filterByNumericValues
    .map((filterElement) => compareValues(filterElement));

  // const filterNumbers = filter();
  // console.log(filter[filter.length - 1]);

  const dataFilters = () => {
    if (filterByName.name) return getPlanets();
    if (filterByNumericValues.length > 0) return filter[filter.length - 1];
    return data;
  };

  const planets = dataFilters();
  console.log(planets);

  if (isLoading) return <div>Loading...</div>;

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
        {data.length && planets.map((planet) => (
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

export default TableInput;
