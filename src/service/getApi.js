const getApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(url);

  const data = response.json();

  return data.then(({ results }) => (
    results.map((result) => {
      delete result.residents;
      return ({
        name: result.name,
        rotationPeriod: result.rotation_period,
        orbitalPeriod: result.orbital_period,
        diameter: result.diameter,
        climate: result.climate,
        gravity: result.gravity,
        terrain: result.terrain,
        surfaceWater: result.surface_water,
        population: result.population,
        films: result.films,
        created: result.created,
        edited: result.edited,
        url: result.url,
      });
    })
  ));
};

export default getApi;
