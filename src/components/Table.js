import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import SearchInput from './SearchInput';
import Comparison from './Comparison';
import Column from './Column';
import InputData from './InputData';

function Table() {
  const { data,
    name,
    header,
    column,
    comparison,
    value,
    setfilterByNumericValues,
    filterByNumericValues,
    listPlanets,
    setListPlanets,
    setValue,
    setColumn,
    setComparison,
  } = useContext(MyContext);

  let getPlanets = listPlanets;
  const search = name.toLowerCase();
  if (search !== '') {
    getPlanets = listPlanets.filter((planet) => (
      planet.name.toLowerCase().includes(search)));
  }

  const funcClick = () => {
    if (comparison === 'maior que') {
      getPlanets = data.filter((planet) => (
        planet[column] > Number(value)));
      setListPlanets(getPlanets);
    } else if (comparison === 'menor que') {
      getPlanets = data.filter((planet) => (
        planet[column] < Number(value)));
      setListPlanets(getPlanets);
    } else if (comparison === 'igual a') {
      getPlanets = data.filter((planet) => (
        planet[column] === value));
      setListPlanets(getPlanets);
    }
    setfilterByNumericValues([...filterByNumericValues, { value, column, comparison }]);
    document.getElementById(comparison).remove();
    document.getElementById(column).remove();
    setColumn('orbital_period');
    setComparison('menor que');
    setValue('');
  };

  return (
    <>
      <SearchInput />

      <div>
        <Column />
        <Comparison />
        <InputData />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => funcClick() }
        >
          Filtrar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            {header.map((head) => (
              <th key={ head }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getPlanets.map((datas, index) => (
            <tr key={ index }>
              <td>{datas.name}</td>
              <td>{datas.rotation_period}</td>
              <td>{datas.orbital_period}</td>
              <td>{datas.diameter}</td>
              <td>{datas.climate}</td>
              <td>{datas.gravity}</td>
              <td>{datas.terrain}</td>
              <td>{datas.surface_water}</td>
              <td>{datas.population}</td>
              <td>{datas.films}</td>
              <td>{datas.created}</td>
              <td>{datas.edited}</td>
              <td>{datas.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
// Explicação do GUilherme t10A.
