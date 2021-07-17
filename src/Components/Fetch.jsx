const apiPlanet = 'https://swapi-trybe.herokuapp.com/api/planets/';

const Fetch = async () => {
  const response = await fetch(apiPlanet);
  const result = await response.json();
  const { results } = result;
  const data = results.map((GokuSSjSSblue) => {
    delete GokuSSjSSblue.residents;
    return GokuSSjSSblue;
  });
  return data;
};

export default Fetch;
