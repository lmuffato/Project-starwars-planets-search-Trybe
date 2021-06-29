import formatDataApi from '../utils/formatDataApi';

const requestPlanetsAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = response.json();

  return data.then(({ results }) => formatDataApi(results));
};

export default requestPlanetsAPI;
