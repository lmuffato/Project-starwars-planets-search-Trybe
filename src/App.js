import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import InputBox from './components/InputBox';

function App() {
  return (
    <StarWarsProvider>
      <h1>StarWars Planets Search!</h1>
      <InputBox />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
