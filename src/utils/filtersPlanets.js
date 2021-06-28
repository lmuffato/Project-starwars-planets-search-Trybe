export default function filtersPlanets(planets, filterByNumericValues, name) {
  let filtered = planets
    .filter((planet) => (planet.name.toLowerCase().includes(name.toLowerCase())));
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filtered = filtered.filter((planet) => {
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
    });
  }
  return filtered;
}
