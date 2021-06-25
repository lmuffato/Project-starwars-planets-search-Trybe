import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../css/PlanetsTable.css';

function PlanetsTable() {
  const { fetchPlanet: fetchPlanetApi } = useContext(PlanetsContext);
  const { isLoading, filterName, newArray, filterInfo } = useContext(PlanetsContext);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState('');
  useEffect(() => {
    fetchPlanetApi();
  }, []);

  function columnFilterFunc(ev) {
    const event = ev.target.value;
    setColumnFilter(event);
  }
  function comparisonFilterFunc(ev) {
    const event = ev.target.value;
    setComparisonFilter(event);
  }

  function numberFilterFunc(ev) {
    const event = ev.target.value;
    setNumberFilter(event);
  }

  return (
    <main>
      <label htmlFor="filter-byname">
        Nome
        <input
          data-testid="name-filter"
          id="filter-byname"
          type="text"
          onChange={ (ev) => { filterName(ev.target.value); } }
        />
      </label>
      <form
        onSubmit={ (ev) => filterInfo(ev, comparisonFilter, columnFilter, numberFilter) }
      >
        <select data-testid="column-filter" onChange={ columnFilterFunc }>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" onChange={ comparisonFilterFunc }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          data-testid="value-filter"
          type="number"
          value={ numberFilter }
          onChange={ numberFilterFunc }
        />
        <button data-testid="button-filter" type="submit">Pesquisar</button>
      </form>
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
            <th>Created</th>
          </tr>

          {isLoading
            ? <span>Carregando</span> : newArray.map((planet, index) => (
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
                <td key={ planet.created }>{planet.created}</td>
              </tr>

            )) }
        </table>
      </section>
    </main>
  );
}

export default PlanetsTable;
