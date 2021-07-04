export default function requestAPI() {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(API_URL)
    .then((response) => response.json());
}

// export function filterNameAPI(query) {
//   const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   return fetch(`${API_URL}?search=${query}`)
//     .then((response) => response.json());
// }
