import { useEffect, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function ServiceApi() {
  const { setPlanetsList, setTableColumns } = useContext(PlanetContext);

  // DidMount
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(urlApi);
        const { results } = await response.json();
        if (results.length !== 0 || results === undefined) {
          setPlanetsList(results);
          setTableColumns(Object.keys(results[0]));
        }
      } catch (error) { console.error(error); }
    };
    getPlanets();
  }, [setPlanetsList, setTableColumns]);

  return (
    null
  );
}

export default ServiceApi;
