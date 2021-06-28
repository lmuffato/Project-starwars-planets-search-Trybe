const planetsApi = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const request = await fetch(endpoint).then((data) => data.json());
    return request;
  } catch (error) {
    console.log('API error');
  }
};

export default planetsApi;
