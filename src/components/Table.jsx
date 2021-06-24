import React, { useEffect, useState } from 'react';
import fetchAPI from '../services/fetchAPI';
import '../style/Table.css';

const Table = () => {
  const [planetList, setPlanetList] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setPlanetList(await fetchAPI());
    };
    fetch();
  }, []);

  if (planetList) {
    // console.log(planetList.results);
    const { results } = planetList;
    const headers = Object.keys(results[0]).filter(
      (header) => header !== 'residents',
    );
    const planetsInfo = results.map((planet, index) => {
      const planets = headers.map((header) => planet[header]);
      return (
        <tr key={ index }>
          {
            planets.map((data, i) => <td key={ i }>{data}</td>)
          }
        </tr>
      );
    });
    // console.log(headers);

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetsInfo}
        </tbody>
      </table>
    );
  }
  return <p>Loading..</p>;
};

export default Table;
