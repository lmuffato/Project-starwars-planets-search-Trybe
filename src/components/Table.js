import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function DefaultTable() {
  const {
    sortData,
    headings,
    APIResult,
    nameFilter,
  } = useContext(AppContext);
  const [toRender, setToRender] = useState([]);

  useEffect(() => {
    const filteredData = APIResult.filter(({ name }) => (
      name.toLowerCase().includes(nameFilter))).map((planet) => planet);
    const APISorted = sortData(APIResult);
    const data = nameFilter
      ? filteredData : APISorted;

    setToRender(data);
  }, [nameFilter, APIResult, sortData]);

  const renderHeadings = () => (
    headings.map((heading, index) => (<th key={ index }>{ heading }</th>)));

  return (
    <table>
      <thead>
        <tr>
          { renderHeadings() }
        </tr>
      </thead>

      <tbody>
        { toRender.map((planets, index) => (
          <tr key={ index }>
            <td
              data-testid="planet-name"
            >
              { planets.name }
            </td>
            <td>{ planets.rotation_period }</td>
            <td>{ planets.orbital_period }</td>
            <td>{ planets.diameter }</td>
            <td>{ planets.climate }</td>
            <td>{ planets.gravity }</td>
            <td>{ planets.terrain }</td>
            <td>{ planets.surface_water }</td>
            <td>{ planets.population }</td>
            <td>{ planets.films }</td>
            <td>{ planets.createt }</td>
            <td>{ planets.edited }</td>
            <td>{ planets.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default DefaultTable;
