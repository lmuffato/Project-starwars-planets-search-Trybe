import React, { useContext } from 'react';
import context from '../storeContext/context';
import { cabecalhoHeader, dropdownColuns, faixaDeValor } from '../services/fetchApis';
import './ListaPlanets.css';

const ListaPlanets = () => {
  const { data, namePlanet, setNamePlanet, setData,
    setComparisonFilter, comparisonFilter,
  } = useContext(context);

  const handleNamePlanets = () => (
    <label htmlFor="id-nameFilter">
      Name Planet
      {' '}
      <input
        type="text"
        name="name"
        id="id-nameFilter"
        // value={ name }
        onChange={
          ({ target }) => setNamePlanet({ filterByName: { name: target.value } })
        }
        placeholder="Name Planet"
        data-testid="name-filter"
      />
    </label>
  );

  const handleDropdownColuns = () => (
    <label htmlFor="id-columnFilter">
      <select
        name="id-columnFilter"
        data-testid="column-filter"
        onChange={ ({ target }) => setComparisonFilter(
          { ...comparisonFilter, column: target.value },
        ) }
      >
        {dropdownColuns.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
    </label>
  );

  const handleFaixaDeValor = () => (
    <label htmlFor="id-comparisonFilter">
      <select
        name="id-comparisonFilter"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonFilter(
          { ...comparisonFilter, comparison: target.value },
        ) }
      >
        {faixaDeValor.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
    </label>
  );

  const handleNumber = () => (
    <label htmlFor="id-valueFilter">
      <input
        type="number"
        name="number"
        id="id-valueFilter"
        data-testid="value-filter"
        onChange={ ({ target }) => setComparisonFilter(
          { ...comparisonFilter, value: target.value },
        ) }
      />
    </label>
  );

  const handlePlanetsApi = () => (
    <tbody>
      {data.map((planet) => ( // data.length && data.map
        <tr key={ planet.name }>
          <td className="border">{planet.name}</td>
          <td className="border">{planet.climate}</td>
          <td className="border">{planet.created}</td>
          <td className="border">{planet.diameter}</td>
          <td className="border">{planet.edited}</td>
          <td className="border">{planet.films}</td>
          <td className="border">{planet.gravity}</td>
          <td className="border">{planet.orbital_period}</td>
          <td className="border">{planet.population}</td>
          <td className="border">{planet.rotation_period}</td>
          <td className="border">{planet.surface_water}</td>
          <td className="border">{planet.terrain}</td>
          <td className="border">{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );

  const handlePlanetsNameApi = (nome) => (
    <tbody>
      {data.filter((planet) => planet.name.includes(nome))
        .map((planet) => ( // data.length && data.map
          <tr key={ planet.name }>
            <td className="border">{planet.name}</td>
            <td className="border">{planet.climate}</td>
            <td className="border">{planet.created}</td>
            <td className="border">{planet.diameter}</td>
            <td className="border">{planet.edited}</td>
            <td className="border">{planet.films}</td>
            <td className="border">{planet.gravity}</td>
            <td className="border">{planet.orbital_period}</td>
            <td className="border">{planet.population}</td>
            <td className="border">{planet.rotation_period}</td>
            <td className="border">{planet.surface_water}</td>
            <td className="border">{planet.terrain}</td>
            <td className="border">{planet.url}</td>
          </tr>
        ))}
    </tbody>
  );

  const handleFilterName = () => {
    const { filterByName: { name } } = namePlanet;

    if (name === '') return handlePlanetsApi();

    if (name !== '') return handlePlanetsNameApi(name);
  };

  const handleComparisonfilter = () => {
    const filterComparison = data.filter((optionColumn) => {
      if (comparisonFilter.comparison === 'maior que') {
        return optionColumn[comparisonFilter.column] > Number(comparisonFilter.value);
      }
      if (comparisonFilter.comparison === 'menor que') {
        return optionColumn[comparisonFilter.column] < Number(comparisonFilter.value);
      }
      return optionColumn[comparisonFilter.column] === comparisonFilter.value;
    });
    setData(filterComparison);
    setNamePlanet({ ...namePlanet,
      namePlanet: { filterByNumericValues: comparisonFilter } });
  };

  return (
    <div>
      {handleNamePlanets()}

      {handleDropdownColuns()}

      {handleFaixaDeValor()}

      {handleNumber()}

      <button
        type="button"
        onClick={ handleComparisonfilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>

      <table className="table_planets">
        <thead>
          <tr>
            {cabecalhoHeader.map((descrição) => (
              <th key={ descrição } value={ descrição }>{descrição}</th>
            ))}
          </tr>
        </thead>
        {/* {handlePlanets()} */}
        { handleFilterName() }
      </table>
    </div>
  );
};

export default ListaPlanets;
