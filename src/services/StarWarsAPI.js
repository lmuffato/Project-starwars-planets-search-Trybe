// const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const STARWARS_API = 'https://swapi.dev/api/planets';
// https://trybecourse.slack.com/archives/C01L16B9XC7/p1625938201011200 <endpoint Ícaro

const getPlanetsAPI = () => (
  fetch(STARWARS_API)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))

);

export default getPlanetsAPI;
