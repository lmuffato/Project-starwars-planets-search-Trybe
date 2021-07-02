import formHelpers from './form';

export default function filterPlanets(
  planets,
  { nameParam, valueParam, comparison, column },
) {
  console.log({ planets, nameParam, valueParam, comparison, column });

  if (!planets || !planets.length) {
    return [];
  }

  if (!nameParam && (!valueParam || !comparison || !column)) {
    return planets;
  }

  const firstFilter = planets
    .filter(({ name }) => (
      name.includes(nameParam)
    ));

  // se não tiver informado todos os parametros de filtro de numero,
  // vai retornar o primeiro filtro
  if (!valueParam || !comparison || !column) {
    return firstFilter;
  }

  const usedFilters = ['populations'];

  usedFilters.includes(column);

  // segundo filtro reutilizando o primeiro e aplicando os outros parametros
  const secondFilter = firstFilter.filter((filteredPlanet) => {
    if (comparison === formHelpers.comparisonOptions.greaterThan) {
      return Number(filteredPlanet[column]) > Number(valueParam);
    }

    if (comparison === formHelpers.comparisonOptions.lowerThan) {
      return Number(filteredPlanet[column]) < Number(valueParam);
    }

    return Number(filteredPlanet[column]) === Number(valueParam);
  });

  return secondFilter;
}
