async function SWApi() {
  const dadosApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await dadosApi.json();
  return data;
}
export default SWApi;
