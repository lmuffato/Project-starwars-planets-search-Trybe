import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { compareNameAsc, compareNameDesc, comparePopulationAsc, comparePopulationDesc } from '../services/orderPlanets';

function Table() {
  const context = useContext(PlanetsContext);
  const { data, isLoading, filters, setData, copyResults, resetFilter } = context;
  const { filterByNumericValues, order: { column, sort } } = filters;
  const { name } = filters.filterByName;

  const orderPlanets = (type, form) => {
    if (type === 'Name') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareNameAsc));
      case 'DESC':
        return setData(data.sort(compareNameDesc));
      default:
        break;
      }
    }
    if (type === 'population') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(comparePopulationAsc));
      case 'DESC':
        return setData(data.sort(comparePopulationDesc));
      default:
        break;
      }
    }
  };

  useEffect(() => {
    orderPlanets(column, sort);
  }, [data, column, sort]);

  useEffect(() => {
    if (name.length < 1) return setData(copyResults);
    const filterPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(name));
    if (filterPlanets.length < 1) return setData(copyResults);
    setData(filterPlanets);
  }, [name]);

  const resetPlanets = () => {
    setData(copyResults);
    resetFilter();
  };

  const checkComparison = (currItem) => {
    const currColumn = currItem.column;
    const currComparison = currItem.comparison;
    const currValue = Number(currItem.value);
    switch (currComparison) {
    case 'maior que':
      return data.filter((item) => Number(item[currColumn]) > currValue);
    case 'menor que':
      return data.filter((item) => Number(item[currColumn]) < currValue);
    case 'igual a':
      return data.filter((item) => Number(item[currColumn]) === currValue);
    default:
      break;
    }
  };

  useEffect(() => {
    if (filterByNumericValues.length < 1) return setData(copyResults);
    const aplyFilter = filterByNumericValues.reduce((acc, currItem) => {
      const filter = checkComparison(currItem);
      return filter;
    }, []);
    if (aplyFilter.length < 1) return setData('');
    setData(aplyFilter);
  }, [filterByNumericValues]);
  if (isLoading) return <h2>Loading...</h2>;
  if (data.length < 1) {
    return (
      <div>
        <h2>No have planets with this filter</h2>
        <button type="button" onClick={ resetPlanets }>Reset Planets</button>
      </div>
    );
  }
  const infos = Object.keys(data[0]);
  const filterInfo = infos.filter((item) => item !== 'url');
  return (
    <table>
      <thead>
        <tr>
          {filterInfo.map((item, index) => <th key={ index }>{item}</th>)}
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
