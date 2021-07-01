export default function applyFilterOnPlanets(filters, data = []) {
  const {
    filterByName: { name },
    filterByNumericValue,
  } = filters;

  if (data.length >= 1) {
    let filteredPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(name));

    if (filterByNumericValue.length > 0) {
      console.log('entrou no filtro numerico');
      filteredPlanets = filterByNumericValue.map((filter) => {
        const { column, comparison, value } = filter;
        console.log(column, comparison, value);
        return data.filter((planet) => {
          switch (comparison) {
          case 'maior que':
            console.log(planet[column], value);
            return planet[column] > +(value);
          case 'menor que':
            return planet[column] < +(value);
          case 'igual a':
            return +(planet[column]) === +(value);
          default:
            return false;
          }
        });
      });
      const lastIndex = filteredPlanets.length - 1;
      return filteredPlanets[lastIndex];
    }

    console.log(filteredPlanets);
    return filteredPlanets;
  }
}
