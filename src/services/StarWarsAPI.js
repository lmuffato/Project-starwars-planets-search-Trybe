const URL_PLANESTS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsData = async () => {
  const response = await fetch(URL_PLANESTS);
  const result = response.json();
  return response.ok ? Promise.resolve(result) : Promise.reject(result);
};

export default planetsData;
