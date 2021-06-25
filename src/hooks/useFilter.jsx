// import { useState, useEffect, useContext } from 'react';
// import StarWarsContext from '../context/starWarsContext';

// const useFilter = () => {
//   const { planets } = useContext(StarWarsContext);

//   const [search, setSearch] = useState('');
//   const [filteredPlanets, setFilteredPlanets] = useState([]);

//   useEffect(() => {
//     setFilteredPlanets(
//       planets.filter((planet) => planet.name.toLowerCase().includes(search)),
//     );
//   }, [search, planets]);

//   const uses = { setSearch, filteredPlanets };

//   return uses;
// };

// export default useFilter;
