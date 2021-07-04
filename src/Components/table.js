import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Table() {
  const { loading, info } = useContext(StarWarsContext);
  console.log(loading);

  const theader = () => {
    if (loading === false) {
      return (
        Object.keys({ ...info[0] })
          .filter((e) => e !== 'residents')
          .map((e, i) => (<th key={ i }>{e}</th>)));
    }
  };

  const tbodier = () => {
    if (loading === false) {
      return (
        Object.values(info).filter((e) => ((delete e.residents)))
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
          { theader() }
        </thead>
        <tbody>
          { tbodier() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
