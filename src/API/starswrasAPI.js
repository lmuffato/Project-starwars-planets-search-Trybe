// import { useContext } from 'react';
// import StarwarsContext from '../context/StarwarsContext';

// const starwarsAPI = async () => {
//   const { setData, setLoading } = useContext(StarwarsContext);
//   const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   const { results } = await fetch(endpoint)
//     .then((dataResults) => dataResults.json());
//   const resultsMinusResidents = results.filter((planet) => delete planet.residents);
//   setData(resultsMinusResidents);
//   setLoading(false);
// };

// export default starwarsAPI;
