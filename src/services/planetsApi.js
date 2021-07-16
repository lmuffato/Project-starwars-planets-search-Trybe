export function fetchByColumn() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(url)
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
