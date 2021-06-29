function formatDataApi(results) {
  return results.map((result) => {
    delete result.residents;
    return ({
      name: result.name,
      rotation_period: !Number
        .isNaN(+result.rotation_period) ? +result.rotation_period : 'unknown',
      orbital_period: !Number
        .isNaN(+result.orbital_period) ? +result.orbital_period : 'unknown',
      diameter: !Number
        .isNaN(+result.diameter) ? +result.diameter : 'unknown',
      climate: result.climate,
      gravity: result.gravity,
      terrain: result.terrain,
      surface_water: !Number
        .isNaN(+result.surface_water) ? +result.surface_water : 'unknown',
      population: !Number
        .isNaN(+result.population) ? +result.population : 'unknown',
      films: result.films,
      created: result.created,
      edited: result.edited,
      url: result.url,
    });
  });
}

export default formatDataApi;
