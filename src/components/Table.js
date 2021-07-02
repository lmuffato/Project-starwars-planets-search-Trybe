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

  // Lógica implementada com a ajuda de Felipe Flores - T10-A - (https://github.com/FelipeFloresWeb)
  const compareValues = (filterElement) => {
    const filterColumn = filterElement.column; // separa cada item de filterByNumericValues
    const filterComparison = filterElement.comparison;
    const filterValue = Number(filterElement.value);

    switch (filterComparison) { // Utiliza cada option de filterComparison (ou seja, o comparison) como case;
    case 'maior que':
      return data.filter((item) => Number(item[filterColumn]) > filterValue); // retorna a modificação em data conforme o filtro (o item[filterColumn] corresponde às options population, diameter, etc.. em data)
    case 'menor que':
      return data.filter((item) => Number(item[filterColumn]) < filterValue); // compara as options do elemento da data com o numero digitado, retornando os que passam na condição.
    case 'igual a':
      return data.filter((item) => Number(item[filterColumn]) === filterValue);
    default:
      break;
    }
  };

  const filter = filterByNumericValues
    .map((filterElement) => compareValues(filterElement)); // cada item de filter element é jogado para a função compareValues;

  // Lógica implementada com ajuda de Gabriel Pereira - T10-A - (Link: https://github.com/Gbl97)
  const dataFilters = () => { // Função que une o filtro por nome com o filtro numérico(column, comparison, value);
    if (filterByName.name) return getPlanets();
    if (filterByNumericValues.length > 0) return filter[filter.length - 1];
    return data;
  };

  const planets = dataFilters();

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
