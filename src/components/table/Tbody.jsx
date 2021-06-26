import React from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Tbody() {
  const { planets, filteredByName, filteredByNumbers } = usePlanet();
  const { filters: { filterByName: { name } } } = filteredByName;
  const { filterByNumericValues } = filteredByNumbers;

  const size = filterByNumericValues.length;
  function recursive(tam) {
    if (tam < 0) {
      return;
    }
    const nexNumber = tam - 1;
    if (tam >= 0) {
      recursive(nexNumber);
    }
    if (filterByNumericValues[tam] !== undefined) {
      console.log(filterByNumericValues[tam]);
      const { column, comparison, value } = filterByNumericValues[tam];
      const filterByNumbers = planets.filter((planet) => {
        switch (comparison) {
        case 'igual a':
          return +planet[column] === +value;
        case 'maior que':
          return +planet[column] > +value;
        case 'menor que':
          return +planet[column] < +value;
        default:
          return planets;
        }
      });
      // console.log(filterByNumbers);
      return filterByNumbers;
    }
  }
  recursive(size);
  console.log(recursive(size));

  function FilterPlanetsByName() {
    const filterByName = planets
      .filter((planet) => (planet.name.includes(name)));

    if (filterByNumericValues.length > 0) {
      const { column, comparison, value } = filterByNumericValues[0];
      const filterByNumbers = filterByName
        .filter((planet) => {
          switch (comparison) {
          case 'igual a':
            return +planet[column] === +value;
          case 'maior que':
            return +planet[column] > +value;
          case 'menor que':
            return +planet[column] < +value;
          default:
            return planets;
          }
        });
      return filterByNumbers;
    }
    return filterByName;
  }
  // function FilterPlanetsByName() {
  //   const filterByName = planets
  //     .filter((planet) => (planet.name.includes(name)));

  //   if (filterByNumericValues.length > 0) {
  //     const { column, comparison, value } = filterByNumericValues[0];
  //     const filterByNumbers = filterByName
  //       .filter((planet) => {
  //         switch (comparison) {
  //         case 'igual a':
  //           return +planet[column] === +value;
  //         case 'maior que':
  //           return +planet[column] > +value;
  //         case 'menor que':
  //           return +planet[column] < +value;
  //         default:
  //           return planets;
  //         }
  //       });
  //     return filterByNumbers;
  //   }
  //   return filterByName;
  // }

  return (
    <tbody>
      {FilterPlanetsByName().map((planet, index) => (
        <tr key={ index }>
          <td className="columnName">{planet.name}</td>
          <td className="columnRotationPeriod">{planet.rotation_period}</td>
          <td className="columnOrbitalPeriod">{planet.orbital_period}</td>
          <td className="columnDiameter">{planet.diameter}</td>
          <td className="columnClimate">{planet.climate}</td>
          <td className="columnGravity">{planet.gravity}</td>
          <td className="columnTerrain">{planet.terrain}</td>
          <td className="columnSurfaceWater">{planet.surface_water}</td>
          <td className="columnPopulation">{planet.population}</td>
          <td className="columnFilms">{planet.films}</td>
          <td className="columnCreated">{planet.created}</td>
          <td className="columnEdited">{planet.edited}</td>
          <td className="columnUrl">{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}
