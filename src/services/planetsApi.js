export default function fetchByApi() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((
      data,
    ) => data.results)
    .catch((error) => error);
}
