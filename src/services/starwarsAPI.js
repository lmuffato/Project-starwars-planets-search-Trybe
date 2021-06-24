const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchDataFromStarWarsAPI() {
  try {
    const request = await fetch(endpoint);
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export const dataWithoutResidents = (dataPl) => {
  const dados = dataPl.forEach((planetSW) => delete planetSW.residents);
  return dados;
};
