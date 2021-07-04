import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Table() {
  const { loading, filterdInfo } = useContext(StarWarsContext);
  const theader = () => {
    if (loading === false) {
      return (
        Object.keys({ ...filterdInfo[0] })
          .filter((e) => e !== 'residents')
          .map((e, i) => (<th key={ i }>{e}</th>)));
    }
  };

  const tbodier = () => {
    if (loading === false) {
      return (
        Object.values(filterdInfo).filter((e) => ((delete e.residents)))
          .map((e, i) => (
            <tr key={ i }>
              {(Object.values(e).map((ele, ind) => <td key={ ind }>{ele}</td>))}
            </tr>))
      );
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            { theader() }
          </tr>
        </thead>
        <tbody>
          { tbodier() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
