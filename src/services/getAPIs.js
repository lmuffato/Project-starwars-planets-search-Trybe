const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

/* 1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents
- Realiza uma requisição para a API */
const getAPI = async () => {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    const planets = results;

    planets.map((planet) => delete planet.residents);
    return planets;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAPI;
