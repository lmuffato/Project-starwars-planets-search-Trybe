async function getPlanetsApi() {
  try {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

    const jsonResponse = await request.json();

    const planets = jsonResponse.results.map((planet) => {
      const { residents, ...othersProps } = planet;

      return { ...othersProps };
    });

    return planets;
  } catch (error) {
    throw new Error('Nao foi possível fazer a requisição a API');
  }
}

export default getPlanetsApi;
