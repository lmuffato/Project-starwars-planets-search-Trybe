import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function Table() {
  const { dataTable } = useContext(starwarsContext);

  return (
    <div>
      { dataTable.length === 0 ? <span>Nenhum planeta encontrado</span>
        : (
          <table>
            <thead>
              <tr>
                {
                  Object.keys(dataTable[0]).map((title, index) => (
                    <th key={ index }>{ title }</th>))
                }
              </tr>
            </thead>
            <tbody>
              { dataTable.map((planet, indexPlanet) => (
                <tr key={ indexPlanet }>
                  {
                    Object.values(planet).map((value, index) => (
                      <td key={ index }>{ value }</td>))
                  }
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}
