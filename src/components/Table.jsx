import React, { useContext } from 'react';
import Context from '../context/Context';
import '../style/Table.css';

const Table = () => {
  const {
    data: { planetList, tableHeaders }, filters: { filterByName: { name } },
  } = useContext(Context);
  let planetsFiltred = [];

  if (planetList) {
    if (name) {
      planetsFiltred = planetList.filter((planet) => planet[0].toLowerCase()
        .includes(name.toLowerCase()));
    } else {
      planetsFiltred = planetList;
    }

    const planetsRender = planetsFiltred.map((planet, index) => (
      <tr key={ index }>
        {
          planet.map((data, id) => <td key={ id }>{data}</td>)
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
        <tbody>
          {planetsRender}
        </tbody>
      </table>
    );
  }

  return <p>Loading...</p>;
};

export default Table;
