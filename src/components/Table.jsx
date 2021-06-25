import React from 'react';
import usePlanets from '../hooks/usePlanets';
import RemoveFilter from './RemoveFilter';

function Table() {
  const {
    filters: { filters: { filterByNumbers } },
    data: { planetsList, loading, planetasIniciais },
  } = usePlanets();

  if (loading) {
    return 'carregando';
  }

  return (
    <>
      <div>
        { filterByNumbers && filterByNumbers.map((filter, index) => (
          // console.log(filter)
          <div
            data-testid="filter"
            key={ index }
          >
            <p>{`${filter.columnFilter}`}</p>
            <p>{`${filter.comparisonFilter}`}</p>
            <p>{`${filter.inputFilter}`}</p>
            <RemoveFilter id={ { ...filter } } />
          </div>
        )) }
      </div>
      { planetsList.length > 0
        ? (
          <table>
            <thead>
              <tr>
                {Object.keys(planetasIniciais[0])
                  .map((key) => <th key={ key }>{key}</th>)}
              </tr>
            </thead>
            <tbody>
              {planetsList.map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
                </tr>))}
            </tbody>
          </table>)
        : 'nenhum resultado' }
    </>
  );

  // if (planetsList.length === 0) {
  //   return 'nenhum resultado';
  // }
}

export default Table;
