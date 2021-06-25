import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function Table() {
  const { data } = useContext(starwarsContext);

  return (
    <div>
      { data.length === 0 ? <span>Loading...</span>
        : (
          <table>
            <thead>
              <tr>
                {
                  Object.keys(data[0]).map((title, index) => (
                    <th key={ index }>{ title }</th>))
                }
              </tr>
            </thead>
            <tbody>
              { data.map((planet, index) => (
                <tr key={ index }>
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
