export default function getApi() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((data) => data.json());
}
console.log(then.response);
