const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

// const mockEndpoint = 'https://swapi.dev/api/planets';

export default async function fetchDataFromStarWarsAPI() {
  try {
    const request = await fetch(endpoint);
    const response = await request.json();
    // console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export const dataWithoutResidents = (dataPl) => {
  const dados = dataPl.forEach((planetSW) => delete planetSW.residents);
  return dados;
};

// https://www.tutorialrepublic.com/faq/how-to-remove-a-property-from-a-javascript-object.php
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
