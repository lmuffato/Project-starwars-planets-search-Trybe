import React from 'react';
import './App.css';
import Filter from './Components/filter';
// import { Switch, Route } from 'react-router-dom';
import Table from './Components/table';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        {/* <Switch> */}
        <Filter />
        <Table />
        {/* </Switch> */}
      </StarWarsProvider>
    </div>
  );
}

export default App;
