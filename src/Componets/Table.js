import React from 'react';
import getPlanetsApi from '../Services/RequestAPIs';

class Table extends React.Component {
  componentDidMount() {
    getPlanetsApi()
      .then((res) => {
        const planets = Object.values(res);
        console.log(planets);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <th>Teste</th>
        </thead>
      </table>
    );
  }
}

export default Table;
