import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../css/PlanetsTable.css';

function PlanetsTable() {
  const { fetchPlanet: fetchPlanetApi } = useContext(PlanetsContext);
  const { data } = useContext(PlanetsContext);
  const { isLoading } = useContext(PlanetsContext);
  // const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetchPlanetApi();
  }, [isLoading, fetchPlanetApi]);

  return (
    <main>
      <section>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>

          {isLoading ? <span>carregando...</span>
            : data.results.map((planet, index) => (
              <tr key={ planet.name }>
                <td key={ index }>{planet.name}</td>
                <td key={ planet.rotaion_period }>{planet.rotation_period}</td>
                <td key={ planet.orbital_period }>{planet.orbital_period}</td>
                <td key={ planet.diameter }>{planet.diameter}</td>
                <td key={ planet.climate }>{planet.climate}</td>
                <td key={ planet.gravity }>{planet.gravity}</td>
                <td key={ planet.terrain }>{planet.terrain}</td>
                <td key={ planet.surface_water }>{planet.surface_water}</td>
                <td key={ planet.population }>{planet.population}</td>
                <td key={ planet.films }>{planet.films}</td>
                <td key={ planet.edited }>{planet.edited}</td>
                <td key={ planet.url }>{planet.url}</td>
              </tr>
            ))}
        </table>
      </section>
    </main>
  );
}

export default PlanetsTable;
