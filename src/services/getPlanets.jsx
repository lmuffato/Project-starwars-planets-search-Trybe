export default function getPlanets() {
  return (
    new Promise((resolve) => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => {
          result.json().then((data) => {
            resolve(data.results);
          });
        });
    })
  );
}
