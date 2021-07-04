async function getPlanetsApi() {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

  const jsonResponse = await request.json();

  const planets = jsonResponse.results.map((planet) => {
    const { residents, ...othersProps } = planet;

    return { ...othersProps };
  });

  return planets;
}

export default getPlanetsApi;
