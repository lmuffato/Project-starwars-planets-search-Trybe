class SwapiTrybe {
  async getPlanets(urlBase, endpoint, page = 1) {
    const url = `${urlBase}${endpoint}?page=${page}`;
    const planets = await fetch(url);
    return planets.json();
  }
}

export default SwapiTrybe;
