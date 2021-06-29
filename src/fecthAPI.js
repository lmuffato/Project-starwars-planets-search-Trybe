export default function fetchAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json());
}
