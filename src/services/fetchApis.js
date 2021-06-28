export default async function getPlanets() {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const res = response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export const cabecalhoHeader = [
  'Name', 'Climate', 'Created', 'Diameter', 'Edited', 'Films', 'Gravity',
  'Orbital_Period', 'Population', 'Rotation_Period', 'Surface_Water', 'Terrain', 'URL',
];
