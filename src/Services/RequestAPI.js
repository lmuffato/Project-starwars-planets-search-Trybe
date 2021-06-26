const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const responseApi = async () => {
  const request = await fetch(endpoint);
  const { results } = await request.json();
  return results;
};

export default responseApi;
