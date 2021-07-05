export default function requestAPI() {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(API_URL)
    .then((response) => response.json());
}
