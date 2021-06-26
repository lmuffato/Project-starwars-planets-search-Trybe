const getDataAPI = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await request.json();
  return data;
};

export const filterForNumber = (planets, { column, value, comparison }) => {
  const newFilter = planets.filter((planet) => {
    if (comparison === 'maior que') return Number(planet[column]) > value;
    if (comparison === 'menor que') return Number(planet[column]) < value;
    if (comparison === 'igual a') return planet[column] === value;
    return planets;
  });

  return newFilter;
};

export default getDataAPI;
