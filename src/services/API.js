const getPlanets = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json());
  return result.results;
};

export default getPlanets;
