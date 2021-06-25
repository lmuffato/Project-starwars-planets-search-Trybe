const URL_FILM_1 = '1';
const URL_FILM_2 = '2';
const URL_FILM_3 = '3';
const URL_FILM_4 = '4';
const URL_FILM_5 = '5';
const URL_FILM_6 = '6';

const fetchPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  const { results } = data;
  await results.forEach(async (result) => {
    const { films } = result;
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
        break;
      }
      index += 1;
    });
  });
  return results;
};

export default fetchPlanets;
