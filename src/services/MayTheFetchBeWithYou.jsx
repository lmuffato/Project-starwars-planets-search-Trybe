const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const ALT_URL = 'https://swapi.dev/api/planets';

const FETCH_PLANETS = async () => { //* Utilização de Try/Catch em razão de relatos de problema da API *//
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err.message);
  }
};
export default FETCH_PLANETS;

// const request = await fetch(URL);
//   const jsonPlanets = await request.json();
//   console.log(jsonPlanets);
