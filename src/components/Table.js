import React, { useContext, useEffect } from 'react';
import PlanestContext from '../context/PlanetsContext';

function Table() {
  const context = useContext(PlanestContext);
  const { data, isLoading, filters, setData, copyResults } = context;
  const { name } = filters.filterByName;

  useEffect(() => {
    if (name.length < 1) return setData(copyResults);
    const filterPlantes = data
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setData(filterPlantes);
  }, [name]);

  if (isLoading) return <h2>Loading...</h2>;
  const infos = Object.keys(data[0]);
  if (data.length < 1) return <h2>Teste</h2>;
  const filterInfo = infos.filter((item) => item !== 'url');
  return (
    <table>
      <thead>
        <tr>
          { filterInfo.map((item, index) => <th key={ index }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <tr key={ info.name }>
            <td>{info.name}</td>
            <td>{info.rotation_period}</td>
            <td>{info.orbital_period}</td>
            <td>{info.diameter}</td>
            <td>{info.climate}</td>
            <td>{info.gravity}</td>
            <td>{info.terrain}</td>
            <td>{info.surface_water}</td>
            <td>{info.population}</td>
            <td>{info.residents.map((resident) => resident)}</td>
            <td>{info.films.map((film) => film)}</td>
            <td>{info.created}</td>
            <td>{info.edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
