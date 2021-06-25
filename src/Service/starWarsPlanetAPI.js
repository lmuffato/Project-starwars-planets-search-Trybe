const URLStarWarsPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default async function starWarsPlanetAPI() {
  try {
    const results = await fetch(URLStarWarsPlanets);
    const response = await results.json();
    // how to delete a key from an object:
    // https://javascript.plainenglish.io/how-to-remove-a-key-from-an-object-in-javascript-9e5cf823fd37
    const planets = (response.results.map((planet) => {
      delete (planet.residents);
      return planet;
    }));
    return planets;
  } catch (e) {
    return console.log(e.message);
  }
}
