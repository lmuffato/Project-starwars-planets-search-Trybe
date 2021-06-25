const requestApiStarWars = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api';
  try {
    const response = await fetch(`${url}/planets/`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('request failed');
  }
};

export default requestApiStarWars;
