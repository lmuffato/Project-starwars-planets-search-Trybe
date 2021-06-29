const requestPlanetsAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = response.json();

  return data.then(({ results }) => (
    results.map((result) => {
      delete result.residents;
      return ({
        name: result.name,
        rotation_period: +result.rotation_period,
        orbital_period: +result.orbital_period,
        diameter: +result.diameter,
        climate: result.climate,
        gravity: result.gravity,
        terrain: result.terrain,
        surface_water: +result.surface_water,
        population: +result.population,
        films: result.films,
        created: result.created,
        edited: result.edited,
        url: result.url,
      });
    })
  ));
};

export default requestPlanetsAPI;
