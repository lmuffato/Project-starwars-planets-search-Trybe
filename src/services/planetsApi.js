export default function fetchPlanets() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => error);
}

export function fetchByColumn() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((data) => Object.keys(data.results[0]).filter((key) => key !== 'residents'))
    .catch((error) => error);
}

export function fetchByRow() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((
      data,
    ) => Object.values(data.results))
    .catch((error) => error);
}
