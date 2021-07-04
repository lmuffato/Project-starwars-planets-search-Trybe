export default function filterNumeric(planets, filter) {
  const { column, comparison, value } = filter;
  const arrayFilter = planets.filter((planet) => {
    if (comparison === 'maior que') return Number(planet[column]) > Number(value);
    if (comparison === 'menor que') return Number(planet[column]) < Number(value);
    if (comparison === 'igual a') return Number(planet[column]) === Number(value);
    return planets;
  });
  return arrayFilter;
}
