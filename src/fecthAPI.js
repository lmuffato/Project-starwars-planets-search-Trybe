export default async function fetchAPI() {
  const waitData = await fetch('https://swapi.dev/api/planets');
  return waitData.json();
}

// 'https://swapi-trybe.herokuapp.com/api/planets/'
