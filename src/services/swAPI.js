import { parseJSON } from '../utils';

const STAR_WARS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsData = () => (
  fetch(STAR_WARS_ENDPOINT)
    .then(parseJSON)
);

export default getPlanetsData;
