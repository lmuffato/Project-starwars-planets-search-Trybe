import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';

const ListPlanets = () => {
  // const [planet, setPlanets] = useState('');
  const [planets, setData] = useState([]);

  useEffect(() => {
    planetsAPI().then(({ results }) => setData(results));
  }, []);

  console.log(planets);
  // planets.then();
  // console.log(Object.keys(planets[0]));

  return (
    <section>
      {planets.length > 0
      && <table>
        <thead>
          <tr>
            {Object.keys(planets[0])
              .filter((headers) => (headers !== 'residents'))
              .map((headers) => (
                <th key={ headers } value={ headers }>{headers}</th>
              ))}
          </tr>
          {/* <tr>
            {Object.keys(planets[0]).filter((headers) => (headers !== 'residents'))
              .map((headers) => (
                <th key={ headers } value={ headers }>{headers}</th>
              ))}
          </tr> */}
        </thead>
        <tbody>
          {/* {this.listExpenses()} */}
        </tbody>
        {/* {planets.map((planet) => (
          console.log(Object.keys(planet))
          // const keys = (Object.keys(planet))
          // <li key={ planet.name }>{planet.name}</li>
        ))} */}
      </table>}
      {/* {planets.length <= 0 && 'Loading...' } */}
    </section>
  );
};

export default ListPlanets;
