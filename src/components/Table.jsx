import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, keys, filters } = useContext(Context);
  const headerTable = keys.filter((key) => key !== 'residents');

  if (!keys.length && !data.length) return <div>...Loading</div>;

  const dataFilters = () => {
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filters;

    if (name) {
      return data.filter((planet) => planet.name.includes(name));
    }

    if (filterByNumericValues.length > 0) {
      // Essa parte da lógica (linha 24 à 38) redireciono os méritos ao meu colega Marcelo Maurício:
      // Link: https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/53/commits/ac334f26d16e4c7f4af9650d2bfe42af1f649a04

      const filterNumber = filterByNumericValues.map((numberFilter) => {
        const { column, comparison, value } = numberFilter;

        switch (comparison) {
        case 'maior que':
          return data.filter((planet) => Number(planet[column]) > Number(value));
        case 'menor que':
          return data.filter((planet) => Number(planet[column]) < Number(value));
        case 'igual a':
          return data
            .filter((planet) => Number(planet[column]) === Number(value));
        default:
          return data;
        }
      });
      return filterNumber[filterNumber.length - 1];
    }

    return data;
  };
  const planets = dataFilters();

  return (
    <main>
      <table>
        <thead>
          <tr>
            { headerTable.map((key, index) => <th key={ index }>{key}</th>) }
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
