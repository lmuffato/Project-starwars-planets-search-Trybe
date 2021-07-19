const planetsApi = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    try {
      const fetchApi = await fetch(URL);
      const apiResponse = await fetchApi.json();
      return apiResponse;
    } catch (error) {
      return error;
    }
  };
  
  export default planetsApi;
  