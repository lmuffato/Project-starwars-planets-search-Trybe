const URL_FILM_1 = '1';
const URL_FILM_2 = '2';
const URL_FILM_3 = '3';
const URL_FILM_4 = '4';
const URL_FILM_5 = '5';
const URL_FILM_6 = '6';

// const fetchPlanetsPages = async (page) => {
//   const response = await fetch(`https://swapi-trybe.herokuapp.com/api/planets/?page=${page}`);
//   const data = await response.json();
//   const { results } = data;
//   return results;
// };

const fetchPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  const page1 = data.results;

  // Renderizar todos os 60 planetas (porém não passa no test):

  // const page2 = await fetchPlanetsPages(URL_FILM_2);
  // const page3 = await fetchPlanetsPages(URL_FILM_3);
  // const page4 = await fetchPlanetsPages(URL_FILM_4);
  // const page5 = await fetchPlanetsPages(URL_FILM_5);
  // const page6 = await fetchPlanetsPages(URL_FILM_6);
  const results = page1;
  // .concat(page2
  // .concat(page3
  // .concat(page4
  // .concat(page5
  // .concat(page6)))));
  await results.forEach(async (result) => {
    const { films } = result;
    if (films.length < 1) films[0] = 'https://swapi-trybe.herokuapp.com/api/films/0';
    let index = 0;
    films.forEach((film) => {
      film = film.replace(/([^\d])+/gim, ''); // https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
      switch (film) {
      case URL_FILM_1:
        films[index] = 'A New Hope';
        break;
      case URL_FILM_2:
        films[index] = 'The Empire Strikes Back';
        break;
      case URL_FILM_3:
        films[index] = 'Return of the Jedi';
        break;
      case URL_FILM_4:
        films[index] = 'The Phantom Menace';
        break;
      case URL_FILM_5:
        films[index] = 'Attack of the Clones';
        break;
      case URL_FILM_6:
        films[index] = 'Revenge of the Sith';
        break;
      default:
        films[index] = 'None';
        break;
      }
      index += 1;
    });
  });
  return results;
};

export default fetchPlanets;
