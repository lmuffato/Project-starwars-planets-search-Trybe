import { parseJSON } from '../utils';

const STAR_WARS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsData = () => (
  fetch(STAR_WARS_ENDPOINT)
    .then(parseJSON)
    .catch(console.error)
);

export const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default getPlanetsData;
