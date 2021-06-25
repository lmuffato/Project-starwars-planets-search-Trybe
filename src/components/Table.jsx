import React, { useContext } from 'react';
import Context from '../context/Context';
import '../style/Table.css';

const Table = () => {
  const {
    data: { planetList, tableHeaders }, filters: { filterByName: { name } },
  } = useContext(Context);
  let planetsFiltred = [];

  if (planetList) {
    if (name !== null) {
      planetsFiltred = planetList.filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    } else {
      planetsFiltred = planetList;
    }
    // console.log(name);
    // console.log(planetsFiltred);

    const planetsRender = planetsFiltred.map((planet, index) => (
      <tr key={ index }>
        {
          Object.values(planet).map((data, id) => <td key={ id }>{data}</td>)
        }
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        {planetsRender.length > 0
          ? <tbody>{planetsRender}</tbody> : false}
      </table>
    );
  }

  return <p>Loading...</p>;
};

export default Table;
