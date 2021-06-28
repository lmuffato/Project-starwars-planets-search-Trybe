import React from 'react';
import { StarWarsContext } from '../provider/Provider';

const Table = () => {
  const data = React.useContext(StarWarsContext);
  console.log(Object.keys({ ...data[0] }));

  return (
    <table>
      <thead>
        <tr>
          {Object.keys({ ...data[0] }).map((title) => (<th key={ title }>{title}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => (
          <tr key={ elem.name }>
            {Object.values(elem)
              .map((item) => <td key={ item }>{item}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
};

export default Table;
